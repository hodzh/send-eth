const EthereumTx = require('ethereumjs-tx');

export class TxService {

  static async send(tx, privateKey) {
    let signedTx = TxService.sign(tx, privateKey);
    let response = await fetch('api/sendSignedTX', {
      body: JSON.stringify(signedTx),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    let res = await response.json();
    if (!response.ok) {
      throw Error(res.message || response.statusText);
    }
    return res;
  }

  static sign(params, privateKey) {
    const txParams = {...params, chainId: '0x03'};
    const tx = new EthereumTx(txParams);
    const privateKeyBuf = new Buffer(privateKey, 'hex');
    tx.sign(privateKeyBuf);
    const rawTx = `0x${tx.serialize().toString('hex')}`;
    const publicKey = tx.getSenderPublicKey(privateKey).toString('hex');
    return {rawTx, publicKey};
  }
}