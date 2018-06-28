import { TxService } from './TxService';

describe('TxService', () => {
  const tx = {
    nonce: '0x06',
    gasPrice: '0x09184e7',
    gasLimit: '0x8710',
    to: '0xa998ba2abaa1df5a087c04f2abe0668139d6a3de',
    value: '0x01',
  };
  const privateKey = 'b93e666f0caf6b458bbbc42ce0562b239aa4b2c97b61b046025ea7918c5d8ea4';
  const publicKey = '664d1e0cf95a01da57e5eb8aae766bd3a9cd6d50e80591086b9fed57f5bac642b4d1780fcc818ea9bb052a5b5acb21ff14a2feac5aa9b88aeb88afa7222a580a';
  const rawTx = "0xf86206839184e782871094a998ba2abaa1df5a087c04f2abe0668139d6a3de018029a0ecafa7ec1ed4e3e6f2b3d5e4881ee78a5f326f5d71024b0a9569aff499f2a9bea05bb35b7b014cf88e187b51ae288f57c9d7ae5a8b82e74c3116748cfb5ae3b684";

  it('should sign tx', async () => {
    let sign = await TxService.sign(tx, privateKey);
    expect(sign).toEqual({rawTx, publicKey});
  });
});