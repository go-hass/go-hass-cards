import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import type { HomeAssistant } from "../../../types";
import type { LovelaceHeaderFooter } from "../types";
import type { PictureHeaderFooterConfig } from "./types";
export declare class HuiPictureHeaderFooter extends LitElement implements LovelaceHeaderFooter {
    static getStubConfig(): Record<string, unknown>;
    hass?: HomeAssistant;
    type: "header" | "footer";
    protected _config?: PictureHeaderFooterConfig;
    getCardSize(): number;
    setConfig(config: PictureHeaderFooterConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
    private _handleAction;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-picture-header-footer": HuiPictureHeaderFooter;
    }
}
