import { OrderProcessor } from "./features/orders/order.processor";
import { CreditCardPayment } from "./features/payments/credit-card.payment";
import { PaypalPayment } from "./features/payments/paypal.payment";
import { EmailNotifier } from "./features/notifications/email.notifier";

// 1. Instanciamos las dependencias
const emailNotifier = new EmailNotifier();
const creditCardPayment = new CreditCardPayment();
const paypalPayment = new PaypalPayment();

// 2. Inyección de Dependencias (DIP)
const orderProcessorCard = new OrderProcessor(creditCardPayment, emailNotifier);
const orderProcessorPaypal = new OrderProcessor(paypalPayment, emailNotifier);

// 3. Procesamos los pedidos
orderProcessorCard.process({
    id: 101,
    amount: 150000,
    userEmail: "juan@gmail.com"
});

orderProcessorPaypal.process({
    id: 102,
    amount: 80000,
    userEmail: "maria@gmail.com"
});
