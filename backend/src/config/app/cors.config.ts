import { INestApplication } from '@nestjs/common';
import { AppConfigStep } from './app-config-step';

export class CorsConfig implements AppConfigStep {
  configure(app: INestApplication): void {
    app.enableCors({
      origin: ['*'],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
    });
  }
}
