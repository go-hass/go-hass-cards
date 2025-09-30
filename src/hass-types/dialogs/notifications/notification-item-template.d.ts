import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-card";
export declare class HuiNotificationItemTemplate extends LitElement {
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "notification-item-template": HuiNotificationItemTemplate;
    }
}
