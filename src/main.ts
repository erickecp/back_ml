import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin: '*',
   methods: 'GET,POST,PATCH,DELETE,PUT,HEAD',
   credentials: true,
   allowedHeaders: ['Authorization','Content-Type','User-Agent','Accept']
  },);
  await app.listen(3000);
}
bootstrap();
