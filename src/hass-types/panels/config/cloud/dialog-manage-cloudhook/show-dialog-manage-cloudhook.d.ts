import type { CloudWebhook } from "../../../../data/cloud";
import type { Webhook } from "../../../../data/webhook";
export interface WebhookDialogParams {
    webhook: Webhook;
    cloudhook: CloudWebhook;
    disableHook: () => void;
}
export declare const showManageCloudhookDialog: (element: HTMLElement, webhookDialogParams: WebhookDialogParams) => void;
