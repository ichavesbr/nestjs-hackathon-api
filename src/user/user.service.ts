import { Injectable } from '@nestjs/common';

interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Igor', email: 'igor@mail.com' },
    { id: 2, name: 'John', email: 'john@mail.com' },
  ];

  findAllUsers(name: string = '') {
    return this.users.filter((user) =>
      user.name.toLowerCase().includes(name.toLocaleLowerCase()),
    );
  }
}
