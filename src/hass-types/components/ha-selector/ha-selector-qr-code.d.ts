import { LitElement } from "lit";
import type { QRCodeSelector } from "../../data/selector";
import "../ha-qr-code";
export declare class HaSelectorQRCode extends LitElement {
    selector: QRCodeSelector;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-qr_code": HaSelectorQRCode;
    }
}
