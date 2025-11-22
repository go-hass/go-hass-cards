import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-ripple";
import "../../../components/ha-sortable";
import "../../../components/ha-svg-icon";
import type { LovelaceViewHeaderConfig } from "../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../types";
import type { HuiBadge } from "../badges/hui-badge";
import "../badges/hui-view-badges";
import type { HuiCard } from "../cards/hui-card";
import "../components/hui-badge-edit-mode";
import type { Lovelace } from "../types";
export declare const DEFAULT_VIEW_HEADER_LAYOUT = "center";
export declare const DEFAULT_VIEW_HEADER_BADGES_POSITION = "bottom";
export declare const DEFAULT_VIEW_HEADER_BADGES_WRAP = "wrap";
export declare class HuiViewHeader extends LitElement {
    hass: HomeAssistant;
    lovelace: Lovelace;
    card?: HuiCard;
    badges: HuiBadge[];
    config?: LovelaceViewHeaderConfig;
    viewIndex: number;
    private _checkHidden;
    private _badgeVisibilityChanged;
    private _dragScrollController;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<typeof this>): void;
    private _createCardElement;
    private _addCard;
    private _deleteCard;
    private _editCard;
    private _saveHeaderConfig;
    private _configure;
    render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-view-header": HuiViewHeader;
    }
}
