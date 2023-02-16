/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
