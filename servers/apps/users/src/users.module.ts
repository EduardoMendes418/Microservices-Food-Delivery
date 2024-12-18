import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import {PrismaService} from '../../../prisma/Prisma.service'
import { UserResolver } from './user.resolver';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile:{
        federation: 2,
      }
    })
  ],
  controllers: [],
  providers: [UsersService, ConfigService, JwtService, PrismaService, UserResolver],
})
export class UsersModule {}
