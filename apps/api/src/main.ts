import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as morgan from 'morgan';
import { AppModule } from './app.module';
import { AuthGuard } from './auth/auth.guard';
import env from './utils/env';


const corsConfig = {
  origin: [
    'http://146.190.51.66:4100',
    'http://146.190.51.66:4101',
    'http://146.190.51.66:4102',
    'https://bamporeze.com',
    'https://panel.bamporeze.com',
    'https://api.bamporeze.com',
    'http://127.0.0.1:4100',
    'http://127.0.0.1:4101',
    'http://localhost:4000',
    'http://localhost:3000',
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.setGlobalPrefix('api/v1')

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('BAMPOREZEAPI')
    .setDescription('BAMPOREZEAPI for web and dashboard')
    .setVersion('1.0')
    // .addTag('latest')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger-doc', app, document);

  app.enableCors(corsConfig);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  app.useGlobalGuards(new AuthGuard());
  app.use(morgan('dev'));
  await app.listen(env.PORT);
}
bootstrap();
