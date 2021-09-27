/**
 * Import Controller, Get, Post, Put, Delete, Patch, Options, Head, All, etc. decorators
 */
import {
  Controller,
  Get,
  // Post,
  // Put,
  // Delete,
  // Patch,
  // Options,
  // Head,
  // All,
} from '@jasonsoft/koa-controller';

/** Inject the controller decorator */
@Controller()
export default class AppController {
  constructor() {
    this.message = {
      title: 'Welcome to use jasonsoft-koa-server template',
      author: 'Jason.Song',
      github: 'https://github.com/jasonsoft-net',
      organization: 'https://github.com/jasonsoft',
    };
  }

  /**
   * GET http://localhost:3000/
   */
  @Get()
  async index() {
    return this.message;
  }
}
