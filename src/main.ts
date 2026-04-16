import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/vi');

  const config = new DocumentBuilder()
    .setTitle('API de AutoSale')
    .setDescription('API para la gestion de vehiculos en AutoSale')
    .setVersion('1.0')
    .build();

    const document = SwaggerModule.createDocument(app,config);
    SwaggerModule.setup('api/docs', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
