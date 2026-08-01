import { INotifier } from "../../core/interfaces/notifier.interface";

export class EmailNotifier implements INotifier {
    notify(message: string, recipient: string): void {
        console.log(`[EMAIL SENT] Envíado a <${recipient}>: "${message}"`);
    }
}
