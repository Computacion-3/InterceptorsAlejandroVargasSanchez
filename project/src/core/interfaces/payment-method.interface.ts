export interface IPaymentMethod {
    pay(amount: number): boolean;
}
