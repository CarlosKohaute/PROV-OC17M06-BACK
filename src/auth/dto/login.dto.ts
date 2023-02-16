/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: "Nickname from user",
    example: "CarlosKohaute",
  })
  nickname: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: "User password",
    example: "A123456b@",
  })
  password: string;
}
