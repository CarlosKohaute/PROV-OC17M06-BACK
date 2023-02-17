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
  UseGuards,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entitie";
import { AuthGuard } from "@nestjs/passport";

@ApiTags("Users")
@Controller("Users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({
    summary: "Criar um novo usuário",
  })
  create(@Body() dto: CreateUserDto): Promise<User | void> {
    return this.usersService.create(dto);
  }

  @Get()
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: "Lista todos os usuários",
  })
  @ApiBearerAuth()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(":id")
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: "Lista usuário por id",
  })
  @ApiBearerAuth()
  findOne(@Param("id") id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Patch(":id")
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: "Atualizar um usuário",
  })
  @ApiBearerAuth()
  update(
    @Param("id") id: string,
    @Body() dto: UpdateUserDto
  ): Promise<User | void> {
    return this.usersService.update(id, dto);
  }

  @Delete(":id")
  @UseGuards(AuthGuard())
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: "Deleção de um usuário",
  })
  @ApiBearerAuth()
  remove(@Param("id") id: string) {
    return this.usersService.remove(id);
  }
}
