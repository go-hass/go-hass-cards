import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../../../types";
import "../components/hui-buttons-base";
import type { LovelaceHeaderFooter } from "../types";
import type { ButtonsHeaderFooterConfig } from "./types";
export declare class HuiButtonsHeaderFooter extends LitElement implements LovelaceHeaderFooter {
    static getStubConfig(): Record<string, unknown>;
    hass?: HomeAssistant;
    type: "header" | "footer";
    private _configEntities?;
    getCardSize(): number;
    setConfig(config: ButtonsHeaderFooterConfig): void;
    protected render(): TemplateResult | undefined;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-buttons-header-footer": HuiButtonsHeaderFooter;
    }
}
