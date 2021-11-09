import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@modules/app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept'
  });
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true
    })
  );
  app.useGlobalFilters(new HttpExceptionFilter());

  console.log(`listening at port ${configService.get('port')}`);
  await app.listen(configService.get('port'));
}
bootstrap();
