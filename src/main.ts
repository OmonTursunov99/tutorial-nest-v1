// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app/app.module';
//
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
//
//   console.info("Bootstrap app");
// }
// bootstrap();


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import serverless = require('serverless-http');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = '.netlify/functions/main';
  app.setGlobalPrefix(globalPrefix);
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverless(expressApp)
}

let server;
export const handler = async (event, context, callback) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
