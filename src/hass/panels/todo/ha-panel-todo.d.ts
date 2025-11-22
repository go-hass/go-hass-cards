import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-button";
import "../../components/ha-fab";
import "../../components/ha-icon-button";
import "../../components/ha-list";
import "../../components/ha-list-item";
import "../../components/ha-menu-button";
import "../../components/ha-state-icon";
import "../../components/ha-svg-icon";
import "../../components/ha-two-pane-top-app-bar-fixed";
import type { HomeAssistant } from "../../types";
import "../lovelace/cards/hui-card";
declare class PanelTodo extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    mobile: boolean;
    private _entityId?;
    private _headerHeight;
    private _showPaneController;
    private _mql?;
    private _conversation;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _setIsMobile;
    protected willUpdate(changedProperties: PropertyValues): void;
    private _setupTodoElement;
    private _cardConfig;
    protected render(): TemplateResult;
    private _handleEntityPicked;
    private _addList;
    private _showMoreInfoDialog;
    private _deleteList;
    private _showVoiceCommandDialog;
    private _addItem;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-todo": PanelTodo;
    }
}
export {};
