import { Request, Response, NextFunction } from "express";

export const requestLoggerMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    console.log(`[REQ] ${req.method} ${req.originalUrl}`);
    next();
};
