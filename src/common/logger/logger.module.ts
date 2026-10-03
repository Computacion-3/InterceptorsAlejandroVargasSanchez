import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TraceabilityInterceptor } from '../interceptors/traceability.interceptor';

import { AppLogger } from './logger.service';
import { CryptoInterceptor } from './crypto.interceptor';

@Global()
@Module({
    providers: [AppLogger, CryptoInterceptor, TraceabilityInterceptor],
    exports: [AppLogger, CryptoInterceptor, TraceabilityInterceptor],
    imports: [ConfigModule],
})
export class LoggerModule {}
