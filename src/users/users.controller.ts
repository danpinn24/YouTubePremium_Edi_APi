import { Body, Controller, Delete, Get, Post, Put, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserModel } from './users.model';


@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService){}



@Post()
postUsers(@Body()newUsers: UserModel) {
  return this.service.postUsers(newUsers);
}

 @Get()
  getUsers() {
    return this.service.getUsers();
  }

  @Get(':id')
  getUsersByID(@Param('id') id: number) { 
    return this.service.getUsersByID(id);
  }
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() newUser: UserModel) {
      const userId = parseInt(id, 10); 
      return this.service.putUsers(newUser, userId);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
      const deletedUser = this.service.deleteUsers(Number(id)); 
      if (deletedUser) {
          return { message: 'Usuario eliminado', user: deletedUser };
      } else {
          return { message: 'Usuario no encontrado', statusCode: 404 };
      }
  }
}