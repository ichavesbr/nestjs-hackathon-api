import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user') // rota /user
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get() // cria método HTTP GET --> /user/igor
  // cria método para buscar query name na url. --> /user?name=...
  getUsers(@Query('name') name: string): unknown {
    return this.userService.findAllUsers(name);
  }

  @Get(':id') // cria método HTTP GET com id dinâmico --> /user/:id
  // cria método para buscar parâmetro id na url. --> /user/123...
  findOneUser(@Param('id') id: number): unknown {
    return this.userService.findOneUser(id);

    // return { id, name: 'Igor' };
  }

  @Post() // cria método HTTP POST --> /user
  // cria método para criar user novo. createUserDto é o body do POST.
  createUser(@Body() createUserDto: CreateUserDto) {
    return { data: createUserDto, message: 'User created successfully' };
  }

  @Put() // cria método HTTP PUT --> /user/:id
  // cria método para atualizar user existente. updateUserDto é o body do POST.
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return {
      data: { id, ...updateUserDto },
      message: 'User created successfully',
    };
  }
}
