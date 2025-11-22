import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "./ha-alert";
export declare class HaQrCode extends LitElement {
    data?: string;
    errorCorrectionLevel: "low" | "medium" | "quartile" | "high";
    width: number;
    scale: number;
    margin: number;
    maskPattern?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
    centerImage?: string;
    private _error?;
    private _canvas?;
    protected willUpdate(changedProperties: PropertyValues): void;
    updated(changedProperties: PropertyValues): void;
    render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-qr-code": HaQrCode;
    }
}
