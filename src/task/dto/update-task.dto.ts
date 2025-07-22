import { IsEnum } from 'class-validator';
import { Status } from '@prisma/client';
export class UpdateTaskDto{
    @IsEnum(Status)
    status!: Status;
}