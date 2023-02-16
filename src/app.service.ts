/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'App running! 🚀 Visit http://localhost:3334/docs to see documentation.';
  }
}