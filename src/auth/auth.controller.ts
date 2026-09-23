import { Body, Controller, Post } from '@nestjs/common';

import { LoginInputDto } from './dto/login-input.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @Post('login')
    login(@Body() loginInput: LoginInputDto) {
        return this.authService.login(loginInput);
    }
}
