import { randomUUID } from 'node:crypto';
import { STATUS_CODES } from 'node:http';

import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable, finalize } from 'rxjs';

import { AppLogger } from '../logger/logger.service';

@Injectable()
export class TraceabilityInterceptor implements NestInterceptor {
    constructor(private readonly logger: AppLogger) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
        const httpContext = context.switchToHttp();
        const request = httpContext.getRequest<Request>();
        const response = httpContext.getResponse<Response>();
        const incomingCorrelationId = request.header('x-correlation-id');
        const correlationId = incomingCorrelationId || randomUUID();
        const startedAt = Date.now();

        request.correlationId = correlationId;
        response.setHeader('x-correlation-id', correlationId);

        return this.logger.runWithTrace(correlationId, () =>
            next.handle().pipe(
                finalize(() => {
                    const statusCode = response.statusCode;
                    const statusText = STATUS_CODES[statusCode] ?? 'Unknown';
                    const duration = Date.now() - startedAt;
                    const message = `[${request.method} ${request.originalUrl}] [${statusCode} ${statusText}] [Duration: ${duration}ms]`;

                    this.logger.logWithTrace(correlationId, 'TRACE', message);
                }),
            ),
        );
    }
}
