import { Controller, Get, Req, Post, Body } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { User } from "./interfaces/user.interface";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {

  }
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }
}
