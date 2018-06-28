import { Body, Controller, Post, Res } from '@nestjs/common';
import { TxService } from './tx.service';

class SendSignedTxBody {
  readonly rawTx: string;
  readonly publicKey: string;
}

@Controller('api')
export class TxController {
  constructor(private readonly txService: TxService) {
  }

  @Post('sendSignedTX')
  async sendSignedTX(@Body() params: SendSignedTxBody, @Res() res) {
    try {
      let tx = await this.txService.send(params);
      res.status(200).json(tx);
    } catch (e) {
      res.status(500).json({message: e.message});
    }
  }
}