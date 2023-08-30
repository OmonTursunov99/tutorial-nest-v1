import { Injectable } from '@nestjs/common';
import { User } from "./interfaces/user.interface";
import { ResponseList } from "../global.interfaces";

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      name: "Jovlon",
      password: "dawdawdaw",
      username: 'Jovi'
    }
  ];

  create(cat: User) {
    this.users.push(cat);
  }

  findAll(): ResponseList<User[]> {
    return {
      status: 200,
      data: this.users
    };
  }

  // findAll(): User[] {
  //   // return this.users;
  //   return this.users;
  // }
}
