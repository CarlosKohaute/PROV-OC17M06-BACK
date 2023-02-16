/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
