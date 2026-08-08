import { Request, Response, NextFunction } from "express";

// Middleware que se ejecuta DESPUÉS si una ruta no existe (404)
export const notFoundMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    console.log(`[MIDDLEWARE DESPUÉS - 404] No se encontró ninguna ruta para: ${req.method} ${req.originalUrl}`);
    res.status(404).json({ message: `La ruta ${req.originalUrl} no existe.` });
};

// Middleware que se ejecuta DESPUÉS si ocurre un error no capturado (500)
export const errorHandlerMiddleware = (err: any, req: Request, res: Response, next: NextFunction): void => {
    console.log(`[MIDDLEWARE DESPUÉS - ERROR 500] Ocurrió un error: ${err.message}`);
    res.status(500).json({ error: "Error interno del servidor", detail: err.message });
};
