import { Request, Response, NextFunction } from "express";
import CryptoJS from "crypto-js";

export const encryptResponseMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const originalJson = res.json;

    res.json = function (data: any): Response {
        const secretKey = process.env.ENCRYPTION_KEY || "default_secret_key";
        
        // Convertimos la respuesta a JSON y la ciframos
        const jsonString = JSON.stringify(data);
        const encryptedData = CryptoJS.AES.encrypt(jsonString, secretKey).toString();

        // Envia la respuesta cifrada en un envoltorio estandarizado
        return originalJson.call(this, {
            encrypted: true,
            data: encryptedData
        });
    };

    next();
};
