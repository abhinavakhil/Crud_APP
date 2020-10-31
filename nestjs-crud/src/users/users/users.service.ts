import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';

import { User } from './user-entity';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository:Repository<User>,
    ){}

    async getAll(): Promise<User[]>{
        return await this.userRepository.find();
    }

    async create(user:User): Promise<User>{
        return await this.userRepository.save(user);
    }

    async update(user:User): Promise<UpdateResult>{
        return await this.userRepository.update(user.id,user);
    }
    
    async delete(id): Promise<DeleteResult>{
        return await this.userRepository.delete(id);
    }
}
