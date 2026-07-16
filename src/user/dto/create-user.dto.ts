// DTO - Data Transfer Object
// classes com os tipos do TS para o body do POST
// não usa type nem interface, e sim class

import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  name!: string;

  @IsEmail()
  email!: string;
}
