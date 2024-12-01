import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { RegisterRepose } from './types/user.types';
import { RegisterDto } from './dto/user.dto';
import { BadRequestException } from '@nestjs/common';
import { User } from './entities/user.entity';


@Resolver('User')
//@userfilter
export class UserResolver {
    constructor(
        private readonly userService: UsersService
    ) { }

    @Mutation(() => RegisterRepose)
    async register(
        @Args('registerInput') registerDto: RegisterDto,
    ): Promise<RegisterRepose> {
        if (!registerDto.name || !registerDto.email || !registerDto.password) {
            throw new BadRequestException('Please Fill the all fields');
        }

        const user = await this.userService.register(registerDto);
        return { user }
    }

    @Query(() => [User])
    async getUsers() {
        return this.userService.getUsers();
    }

}