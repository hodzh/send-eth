import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TxModule } from './tx/tx.module';

@Module({
  imports: [TxModule],
  controllers: [AppController],
})
export class ApplicationModule {
}