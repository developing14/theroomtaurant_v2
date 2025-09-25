import 'reflect-metadata'; 
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser())

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,              //  strips properties not in DTO
      // forbidNonWhitelisted: true,   //  throw error if unknown props are sent
      transform: true,              //  auto-transform plain -> class instance
      transformOptions: {
        enableImplicitConversion: true, // e.g. string -> number automatically
      },
    }),
  );
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
