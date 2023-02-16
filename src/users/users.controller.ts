/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entitie";

@ApiTags("user")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({
    summary: "Criar novo usuário.",
  })
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({
    summary: "Listar todos os usuários.",
  })
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(":id")
  @ApiOperation({
    summary: "Listar usuário por id.",
  })
  findOne(@Param("id") id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Patch(":id")
  @ApiOperation({
    summary: "Editar usuário pelo id.",
  })
  update(@Param("id") id: string, @Body() dto: UpdateUserDto): Promise<User> {
    return this.usersService.update(id, dto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remover um usuário pelo ID',
  })
  delete(@Param('id') id: string) {
    this.usersService.delete(id);
  }
}
