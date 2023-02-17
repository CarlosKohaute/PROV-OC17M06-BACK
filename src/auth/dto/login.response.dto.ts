/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/users/entities/user.entitie";

export class LoginResponseDto {
  @ApiProperty({
    description: "Token gerado no login",
    example:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF5bGFuQGJvc2Nhcmluby5jb20iLCJwYXNzd29yZCI6InlhMGdzcWh5NHd6dnV2YjQifQ.yN_8-Mge9mFgsnYHnPEh_ZzNP7YKvSbQ3Alug9HMCsM",
  })
  token: string;

  @ApiProperty({
    description: "Dados do usuário que realizou o login",
  })
  user: User;
}
