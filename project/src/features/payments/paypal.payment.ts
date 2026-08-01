import { IPaymentMethod } from "../../core/interfaces/payment-method.interface";

// Demuestra OCP: Agregamos PayPal creando una nueva clase sin modificar OrderProcessor
export class PaypalPayment implements IPaymentMethod {
    pay(amount: number): boolean {
        console.log(`[PAGO REALIZADO] $${amount} cobrados exitosamente con PayPal.`);
        return true;
    }
}
