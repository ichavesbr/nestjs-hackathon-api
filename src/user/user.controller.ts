import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('user') // rota /user
export class UserController {
  @Get() // cria método HTTP GET
  // cria método para buscar query name na url. --> /user?name=...
  getUsers(@Query('name') name: string) {
    const users = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Igor' },
    ];

    // verifica se tem o parâmetro "name" na url. --> /user?name=...
    if (name) {
      return users.filter((user) =>
        // verifica se dentro do array "users" tem algum name igual ao do parâmetro da url
        user.name.toLowerCase().includes(name.toLowerCase()),
      );
    }
    return users;
  }

  @Get(':id') // cria método HTTP GET com id dinâmico
  // cria método para buscar parâmetro id na url. --> /user/123...
  getUserById(@Param('id') id: string) {
    return { id, name: 'Igor' };
  }

  @Post() // cria método HTTP POST
  // cria método para criar user novo. --> /user/
  createUser(@Body() body: any) {
    return { message: 'User created successfully' };
  }
}

// DTO - data transfer object
// classe com os tipos do TS para o body do POST
// não usa type nem interface, e sim class
