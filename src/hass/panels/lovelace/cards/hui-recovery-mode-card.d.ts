import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-card";
import type { HomeAssistant } from "../../../types";
import "../../config/logs/error-log-card";
import type { LovelaceCard } from "../types";
export declare class HuiRecoveryModeCard extends LitElement implements LovelaceCard {
    hass?: HomeAssistant;
    getCardSize(): number;
    setConfig(_config: any): void;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-recovery-mode-card": HuiRecoveryModeCard;
    }
}
