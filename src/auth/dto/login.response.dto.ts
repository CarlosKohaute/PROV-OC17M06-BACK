/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/users/entities/user.entitie";

export class LoginResponseDto {
  @ApiProperty({
    description: "JWT generated from login",
    example: "TOKEN_AUTOMATIC_GENERATED",
  })
  token: string;

  @ApiProperty({
    description: "User data auth",
  })
  user: User;
}
