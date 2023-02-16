/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
  login(
    loginDto: LoginDto
  ): Promise<import("./dto/login.response.dto").LoginResponseDto> {
    throw new Error("Method not implemented.");
  }
}
