import { OmitType } from '@nestjs/mapped-types';
import { AuthDto } from './auth.dto';

export class LoginDto extends OmitType(AuthDto, ['name'] as const) {}