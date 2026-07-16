// DTO - Data Transfer Object
// classes com os tipos do TS para o body do POST
// não usa type nem interface, e sim class

import { isEmail, isString, MinLength } from 'class-validator';

export class CreateUserDto {
  @isString()
  @MinLength(3)
  name!: string;

  @isEmail()
  email!: string;
}
