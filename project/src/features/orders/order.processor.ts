import { IPaymentMethod } from "../../core/interfaces/payment-method.interface";
import { INotifier } from "../../core/interfaces/notifier.interface";
import { Order } from "./order.model";

// Cumple SRP: Solo coordina el flujo del pedido
// Cumple DIP: Depende de interfaces (IPaymentMethod, INotifier) y no de clases concretas
export class OrderProcessor {
    constructor(
        private paymentMethod: IPaymentMethod,
        private notifier: INotifier
    ) {}

    process(order: Order): boolean {
        console.log(`\nProcesando pedido #${order.id}...`);

        if (order.amount <= 0) {
            console.log("Error: El monto del pedido debe ser mayor a 0.");
            return false;
        }

        const isSuccess = this.paymentMethod.pay(order.amount);

        if (isSuccess) {
            this.notifier.notify(
                `Tu pedido #${order.id} por $${order.amount} fue exitoso.`,
                order.userEmail
            );
            console.log(`Pedido #${order.id} finalizado con éxito.`);
            return true;
        }

        return false;
    }
}
