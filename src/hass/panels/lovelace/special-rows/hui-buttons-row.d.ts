import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../../../types";
import "../components/hui-buttons-base";
import type { ButtonsRowConfig, LovelaceRow } from "../entity-rows/types";
export declare class HuiButtonsRow extends LitElement implements LovelaceRow {
    static getStubConfig(): Record<string, unknown>;
    hass?: HomeAssistant;
    private _configEntities?;
    setConfig(config: ButtonsRowConfig): void;
    protected render(): TemplateResult | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-buttons-row": HuiButtonsRow;
    }
}
