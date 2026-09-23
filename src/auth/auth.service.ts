import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { LoginInputDto } from './dto/login-input.dto';
import { UserService } from './user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) {}
    async login(loginInput: LoginInputDto) {
        // Login
        // Exista el usuario
        const user = await this.userService.findOne(loginInput.email, true);
        if (!user) {
            throw new NotFoundException('Usuario no encontrado');
        }
        // Comparar las contraseñas
        const isMatch = await bcrypt.compare(loginInput.password, user.passwordHash);
        if (!isMatch) {
            throw new UnauthorizedException('Credenciales invalidas');
        }
        // Obtener los permisos
        const permissions = user.role.rolePermissions.map((rp) => rp.permission.name);
        // Crear el token

        const payload = {
            sub: user.id,
            email: user.email,
            permissions,
        };

        return this.jwtService.sign(payload);
    }
}
