import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly JwtService: JwtService,
    //private readonly
    private readonly configService: ConfigService,
  ) { }

  // register user service
  async register(registerDto: RegisterDto) {
    const { name, email, password } = registerDto;
    const user = {
      name,
      email,
      password,
    };
    return user;
  }

  // Login service
  async Login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = {
      email,
      password,
    }
    return user;
  }

  //get alt user service
  async getUsers() {
    const users = [{
      id: "1",
      name: "test",
      email: "eduardo@gmail.com",
      password: "123",
    }]
    return users;
  }

}
