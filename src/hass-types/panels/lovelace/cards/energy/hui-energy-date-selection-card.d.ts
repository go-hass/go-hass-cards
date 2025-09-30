import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-card";
import type { HomeAssistant } from "../../../../types";
import "../../components/hui-energy-period-selector";
import type { LovelaceCard, LovelaceGridOptions } from "../../types";
import type { EnergyCardBaseConfig } from "../types";
export declare class HuiEnergyDateSelectionCard extends LitElement implements LovelaceCard {
    hass: HomeAssistant;
    private _config?;
    getCardSize(): Promise<number> | number;
    getGridOptions(): LovelaceGridOptions;
    setConfig(config: EnergyCardBaseConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-energy-date-selection-card": HuiEnergyDateSelectionCard;
    }
}
