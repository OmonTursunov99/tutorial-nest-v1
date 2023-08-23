import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  appStart(): string {
    return "App started"
  }
}
