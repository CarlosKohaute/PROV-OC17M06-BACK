/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entitie";

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
  create(dto: CreateUserDto): Promise<User> {
    const data: User = { ...dto };

    return this.prisma.user.create({ data });
  }
  findOne(id: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, dto: UpdateUserDto): Promise<User> {
    const data: Partial<User> = { ...dto };

    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await this.prisma.user.delete({ where: { id } });
  }
}
