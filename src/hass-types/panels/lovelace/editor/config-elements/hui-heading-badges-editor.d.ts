import "@material/mwc-menu/mwc-menu-surface";
import { LitElement, nothing } from "lit";
import "../../../../components/entity/ha-entity-picker";
import "../../../../components/ha-button";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-sortable";
import "../../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceHeadingBadgeConfig } from "../../heading-badges/types";
declare global {
    interface HASSDomEvents {
        "edit-heading-badge": {
            index: number;
        };
        "heading-badges-changed": {
            badges: LovelaceHeadingBadgeConfig[];
        };
    }
}
export declare class HuiHeadingBadgesEditor extends LitElement {
    hass: HomeAssistant;
    badges?: LovelaceHeadingBadgeConfig[];
    private _addContainer?;
    private _entityPicker?;
    private _addMode;
    private _opened;
    private _badgesKeys;
    private _getKey;
    private _computeBadgeLabel;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _renderPicker;
    private _onClosed;
    private _onOpened;
    private _openedChanged;
    private _addEntity;
    private _entityPicked;
    private _badgeMoved;
    private _removeEntity;
    private _editBadge;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-heading-badges-editor": HuiHeadingBadgesEditor;
    }
}
