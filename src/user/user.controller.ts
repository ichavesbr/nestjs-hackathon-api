import { Controller, Get, Query } from '@nestjs/common';

@Controller('user')
export class UserController {
  // GET /user
  @Get()
  getUsers(@Query('name') name: string) {
    const users = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Igor' },
    ];

    if (name) {
      return users.filter((user) =>
        // verifica se dentro do array em name,
        // tem algo que foi digitado pelo usuario que eh recebido pela prop name
        user.name.toLowerCase().includes(name.toLowerCase()),
      );
    }
    return users;
  }
}
