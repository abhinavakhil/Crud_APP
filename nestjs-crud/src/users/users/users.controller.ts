import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { User } from './user-entity';
import { UsersService } from '../users/users.service';
import { identity } from 'rxjs';

@Controller('users')
export class UsersController {

    constructor(private userService:UsersService){}

    @Get()
    index():Promise<User[]>{
        return this.userService.getAll();
    }

    @Post('create')
    async create(@Body() userData:User):Promise<any>{
        return this.userService.create(userData);
    }
   
    @Put(':id/update')
    async update(@Param('id') id, @Body() userData:User):Promise<any>{
        userData.id = Number(id);
        console.log('Update #'+ userData.id);
        return this.userService.update(userData);
    }

    @Delete(':id/delete')
     async delete(@Param('id') id):Promise<any>{
         return this.userService.delete(id);
     }
   

}
