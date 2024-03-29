/**
 * Example: https://github.com/jasonsoft-net/jasonsoft-koa-server
 * FilePath: /jasonsoft-koa-server/app/controllers/user/users.controller.js
 * Import Controller, Get, Post, Put, Delete, Patch, Options, Head, All, etc. decorators
 */
import {
  Controller,
  Get,
  Post,
  // Post,
  // Put,
  // Delete,
  // Patch,
  // Options,
  // Head,
  // All,
} from '@jasonsoft/koa-controller';

@Controller('users')
export default class UsersController {
  constructor() {
    this.users = [
      {
        id: 1,
        username: 'jason',
      },
      {
        id: 2,
        username: 'steve',
      },
    ];
  }

  /**
   * GET http://localhost:3000/users
   */
  @Get()
  async getUsers() {
    return this.users;
  }

  /**
   * GET http://localhost:3000/users/1
   */
  @Get(':id')
  async getUserById(ctx) {
    const { id } = ctx.params;
    return this.users.find((user) => user.id === +id);
  }

  /**
   * POST http://localhost:3000/users
   */
  @Post()
  async createUser(ctx) {
    return { success: true, data: ctx.request.body };
  }
}
