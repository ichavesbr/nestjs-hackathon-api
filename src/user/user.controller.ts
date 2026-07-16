import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user') // rota /user
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get() // busca query "name" na url. --> /user?name=...
  getUsers(@Query('name') name: string) {
    return this.userService.findAllUsers(name);
  }

  @Get(':id') // busca parâmetro id na url. --> /user/123...
  findOneUser(@Param('id') id: string) {
    return this.userService.findOneUser(Number(id));
  }

  @Post() // createUserDto é o body do POST
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Put(':id') // updateUserDto é o body do POST
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(Number(id), updateUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(Number(id));
  }
}
