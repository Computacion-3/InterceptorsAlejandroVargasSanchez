import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppLogger } from './logger.service';
import { CryptoInterceptor } from './crypto.interceptor';

@Global()
@Module({
    providers: [AppLogger, CryptoInterceptor],
    exports: [AppLogger, CryptoInterceptor],
    imports: [ConfigModule],
})
export class LoggerModule {}
