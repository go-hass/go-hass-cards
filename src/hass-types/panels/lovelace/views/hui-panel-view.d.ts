import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-alert";
import type { LovelaceViewElement } from "../../../data/lovelace";
import type { LovelaceViewConfig } from "../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../types";
import type { HuiCard } from "../cards/hui-card";
import type { Lovelace } from "../types";
export declare class PanelView extends LitElement implements LovelaceViewElement {
    hass: HomeAssistant;
    lovelace?: Lovelace;
    index?: number;
    isStrategy: boolean;
    cards: HuiCard[];
    private _card?;
    setConfig(_config: LovelaceViewConfig): void;
    willUpdate(changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    private _addCard;
    private _createCard;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-panel-view": PanelView;
    }
}
