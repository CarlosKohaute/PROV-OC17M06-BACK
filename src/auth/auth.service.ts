/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { User } from "src/users/entities/user.entitie";
import * as bcrypt from "bcrypt";
import { LoginDto } from "./dto/login.dto";
import { LoginResponseDto } from "./dto/login.response.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtservice: JwtService
  ) {}
  async login(dto: LoginDto): Promise<LoginResponseDto> {
    const { email, password } = dto;

    const user: User = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new NotFoundException("Email or password invalid");
    }

    const passwordMatch: boolean = await bcrypt.compare(
      password,
      user.password
    );
    if (!passwordMatch) {
      throw new NotFoundException("Email or password invalid");
    }

    delete user.password;

    const token: string = this.jwtservice.sign({ email });

    return { token, user };
  }
}
