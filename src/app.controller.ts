/* eslint-disable prettier/prettier */
import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { AppService } from "./app.service";
import { AuthService } from './auth/auth.service';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
}

@ApiTags("status")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: "Visualizar status",
  })
  getAppStatus(): string {
    return this.appService.getAppStatus();
  }
}
