import { Injectable } from '@nestjs/common';
import { Web3 } from './web3';

const EthereumTx = require('ethereumjs-tx');

@Injectable()
export class TxService {
  async send({rawTx, publicKey}) {
    const tx = new EthereumTx(rawTx);
    let key = tx.getSenderPublicKey().toString('hex');
    if (publicKey !== key) {
      throw new Error('Invalid public key');
    }
    return await Web3.eth.sendSignedTransaction(rawTx);
  }
}