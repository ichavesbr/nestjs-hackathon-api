import { Injectable } from '@nestjs/common';
import { LoggerService } from './user.logger';

interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UserService {
  constructor(private readonly logger: LoggerService) {}

  private users: User[] = [
    { id: 1, name: 'Igor', email: 'igor@mail.com' },
    { id: 2, name: 'John', email: 'john@mail.com' },
  ];

  findAllUsers(name: string = '') {
    this.logger.log('Finding all users');

    return this.users.filter((user) =>
      user.name.toLowerCase().includes(name.toLocaleLowerCase()),
    );
  }
}

// UserController -> needs UserService
// UserService    -> needs LoggerService
// Nest           -> creates and connects everything
