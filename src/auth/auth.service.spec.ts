import { PrismaModule } from '../prisma/prisma.module'; // adjust the path based on your folder structure
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';

describe('AuthService', () => {
  let service: AuthService;
  
beforeEach(async () => {
  const module: TestingModule = await Test.createTestingModule({
    imports: [PrismaModule],  // Import PrismaModule here
    providers: [AuthService, JwtService],
  }).compile();

  service = module.get<AuthService>(AuthService);
});


  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
