import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class AuthDto{
    @IsNotEmpty()
    @IsString()
    name!: string;

    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @IsNotEmpty()
    @IsString()
    password!: string;
}