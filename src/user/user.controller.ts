import { Controller, Post, Get, Patch, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('user')
export class UserController {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {}

  @Post()
  createUser() {
    return this.userService.createUser();
  }

  @Get()
  getUser() {}

  @Patch()
  updateuser() {}

  @Delete()
  delteUser() {}
}
