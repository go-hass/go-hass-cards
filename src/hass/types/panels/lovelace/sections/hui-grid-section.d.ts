import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-ripple";
import "../../../components/ha-sortable";
import type { LovelaceSectionElement } from "../../../data/lovelace";
import type { LovelaceSectionConfig } from "../../../data/lovelace/config/section";
import type { HomeAssistant } from "../../../types";
import type { HuiCard } from "../cards/hui-card";
import "../components/hui-card-edit-mode";
import type { Lovelace } from "../types";
export declare class GridSection extends LitElement implements LovelaceSectionElement {
    hass: HomeAssistant;
    lovelace?: Lovelace;
    index?: number;
    viewIndex?: number;
    isStrategy: boolean;
    cards: HuiCard[];
    importOnly: boolean;
    _config?: LovelaceSectionConfig;
    _dragging: boolean;
    setConfig(config: LovelaceSectionConfig): void;
    private _cardConfigKeys;
    private _getKey;
    render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _cardMoved;
    private _cardAdded;
    private _cardRemoved;
    private _dragStart;
    private _dragEnd;
    private _addCard;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-grid-section": GridSection;
    }
}
