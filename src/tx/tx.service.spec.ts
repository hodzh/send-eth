//import * as Web3 from '../../__mocks__/web3';

const sendSignedTransaction = jest.fn();
jest.mock('./web3', () => ({Web3: {eth: {sendSignedTransaction: jest.fn()}}}));
const TxService = require('./tx.service').TxService;
const Web3 = require.requireMock('./web3').Web3;

describe('TxService', () => {
  beforeEach(() => {
    Web3.eth.sendSignedTransaction.mockClear();
  });

  it('should send raw tx', async () => {
    const params = {
      "rawTx": "0xf86206839184e782871094a998ba2abaa1df5a087c04f2abe0668139d6a3de018029a0ecafa7ec1ed4e3e6f2b3d5e4881ee78a5f326f5d71024b0a9569aff499f2a9bea05bb35b7b014cf88e187b51ae288f57c9d7ae5a8b82e74c3116748cfb5ae3b684",
      "publicKey": "664d1e0cf95a01da57e5eb8aae766bd3a9cd6d50e80591086b9fed57f5bac642b4d1780fcc818ea9bb052a5b5acb21ff14a2feac5aa9b88aeb88afa7222a580a",
    };
    const txService = new TxService();
    await txService.send(params);
    expect(Web3.eth.sendSignedTransaction.mock.calls.length).toEqual(1);
  });

  it('should fail if public key is invalid', async () => {
    const params = {
      "rawTx": "0xf86206839184e782871094a998ba2abaa1df5a087c04f2abe0668139d6a3de018029a0ecafa7ec1ed4e3e6f2b3d5e4881ee78a5f326f5d71024b0a9569aff499f2a9bea05bb35b7b014cf88e187b51ae288f57c9d7ae5a8b82e74c3116748cfb5ae3b684",
      "publicKey": "ffff",
    };
    const txService = new TxService();
    expect(txService.send(params)).rejects.toEqual(new Error(
      'Invalid public key'));
    expect(Web3.eth.sendSignedTransaction.mock.calls.length).toEqual(0);
  });
});