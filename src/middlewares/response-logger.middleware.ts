import { Request, Response, NextFunction } from "express";

export const responseLoggerMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    res.on("finish", () => {
        console.log(`[RES] ${req.method} ${req.originalUrl} - Status: ${res.statusCode}`);
    });
    next();
};
