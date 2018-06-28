import * as React from 'react';
import { TxService } from './TxService';

type SendFormState = {
  to: string;
  value: string;
  gasLimit: string | number;
  gasPrice: string;
  nonce: string;
  privateKey: string;
  request: boolean;
  response: any;
  error: any;
};

const SendFormInput = ({label, value, onChange}) => (
  <p>
    <label>{label}</label>{' '}
    <input value={value} onChange={onChange} type="text"/>
  </p>
);

export class SendForm extends React.Component<{}, SendFormState> {
  private onChangeTo = e => this.setState({to: e.target.value});
  private onChangeValue = e => this.setState({value: e.target.value});
  private onChangeGasPrice = e => this.setState({gasPrice: e.target.value});
  private onChangeGas = e => this.setState({gasLimit: e.target.value});
  private onChangeNonce = e => this.setState({nonce: e.target.value});
  private onChangePrivateKey = e => this.setState({privateKey: e.target.value});

  constructor(props) {
    super(props);
    this.state = {
      nonce: '0x00',
      gasPrice: '0x09184e7',
      gasLimit: '0x8710',
      to: '0xa998ba2abaa1df5a087c04f2abe0668139d6a3de',
      value: '0x01',
      privateKey: 'b93e666f0caf6b458bbbc42ce0562b239aa4b2c97b61b046025ea7918c5d8ea4',
      request: false,
      response: null,
      error: null,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit() {
    if (this.state.request) {
      return;
    }
    this.setState({request: true, response: null, error: null});
    try {
      let {nonce, gasPrice, gasLimit, to, value, privateKey} = this.state;
      let response = await TxService.send(
        {nonce, gasPrice, gas: gasLimit, to, value}, privateKey);
      this.setState({request: false, response});
    } catch (error) {
      this.setState({request: false, error});
    }
  }

  render() {
    const {
      to, value, gasPrice, gasLimit, nonce, privateKey, request, response,
      error,
    } = this.state;
    return (
      <form>
        <fieldset>
          <legend>Send Ether</legend>
          <SendFormInput label="to" value={to} onChange={this.onChangeTo}/>
          <SendFormInput label="value" value={value}
                         onChange={this.onChangeValue}/>
          <SendFormInput label="gas price" value={gasPrice}
                         onChange={this.onChangeGasPrice}/>
          <SendFormInput label="gas" value={gasLimit}
                         onChange={this.onChangeGas}/>
          <SendFormInput label="nonce" value={nonce}
                         onChange={this.onChangeNonce}/>
          <SendFormInput label="private key" value={privateKey}
                         onChange={this.onChangePrivateKey}/>
        </fieldset>
        <p>
          <input type="button" value="Send" onClick={this.onSubmit}/>
        </p>
        {request ? <p>Sendind...</p> : null}
        {response ? <p>Success (block {response.blockNumber})</p> : null}
        {error ? <p>Error {error.message || error.error}</p> : null}
      </form>
    );
  }
}