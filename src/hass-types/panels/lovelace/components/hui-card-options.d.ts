import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-button-menu";
import "../../../components/ha-card";
import "../../../components/ha-icon-button";
import "../../../components/ha-list-item";
import type { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import type { HomeAssistant } from "../../../types";
import { type LovelaceCardPath } from "../editor/lovelace-path";
import type { Lovelace } from "../types";
export declare class HuiCardOptions extends LitElement {
    hass?: HomeAssistant;
    lovelace?: Lovelace;
    path?: LovelaceCardPath;
    private _assignedElements?;
    hidePosition: boolean;
    protected _clipboard?: LovelaceCardConfig;
    getCardSize(): number | Promise<number>;
    protected updated(changedProps: PropertyValues): void;
    private get _cards();
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
    private _handleAction;
    private _duplicateCard;
    private _editCard;
    private _cutCard;
    private _copyCard;
    private _deleteCard;
    private _decreaseCardPosiion;
    private _increaseCardPosition;
    private _changeCardPosition;
    private _moveCard;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-card-options": HuiCardOptions;
    }
}
