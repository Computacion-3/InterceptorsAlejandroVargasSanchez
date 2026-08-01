import { IPaymentMethod } from "../../core/interfaces/payment-method.interface";

export class CreditCardPayment implements IPaymentMethod {
    pay(amount: number): boolean {
        console.log(`[PAGO REALIZADO] $${amount} cobrados exitosamente con Tarjeta de Crédito.`);
        return true;
    }
}
