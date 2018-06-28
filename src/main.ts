import { resolve } from 'path';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.useStaticAssets(resolve(__dirname, '../dist/pub'));
  app.setBaseViewsDir(resolve(__dirname, 'views'));
  app.setViewEngine('hbs');
  await app.listen(3000);
}

bootstrap();