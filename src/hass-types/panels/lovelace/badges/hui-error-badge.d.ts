import { LitElement, nothing } from "lit";
import "../../../components/ha-badge";
import "../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../types";
import type { LovelaceBadge } from "../types";
import type { ErrorBadgeConfig } from "./types";
export declare const createErrorBadgeElement: (config: any) => HuiErrorBadge;
export declare const createErrorBadgeConfig: (error: any) => {
    type: string;
    error: any;
};
export declare class HuiErrorBadge extends LitElement implements LovelaceBadge {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: ErrorBadgeConfig): void;
    private _viewDetail;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-error-badge": HuiErrorBadge;
    }
}
