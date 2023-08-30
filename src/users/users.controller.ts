import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { User } from "./interfaces/user.interface";
import { ResponseList } from "../global.interfaces";

@Controller('users')
export class UsersController {
  constructor( private usersService: UsersService ) {

  }

  @Get()
  async findAll(): Promise<ResponseList<User[]>> {
    return this.usersService.findAll();
  }

  @Post()
  async create( @Body() createUserDto: CreateUserDto ) {
    this.usersService.create(createUserDto);
  }
}
