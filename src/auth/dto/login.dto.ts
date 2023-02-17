/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
  @IsEmail()
  @ApiProperty({
    description: "Email from user",
    example: "CarlosKohaute@hotmail.com",
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: "User Password",
    example: "A123456b@",
  })
  password: string;
}
