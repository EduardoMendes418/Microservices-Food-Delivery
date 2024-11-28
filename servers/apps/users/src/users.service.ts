import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly JwtService: JwtService,
    //private readonly
    private readonly configService: ConfigService,
  ) { }

  // register user service
  async register(registerDto: RegisterDto){
    const {name, email, password} =  registerDto;
    const user = {
      name,
      email,
      password,
    };
    return user;
  }
}
