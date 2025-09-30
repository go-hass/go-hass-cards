import "@lit-labs/virtualizer";
import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-check-list-item";
import "../../../components/search-input";
import "../../../components/ha-dialog";
import "../../../components/ha-button";
import "../../../components/ha-dialog-header";
import "../../../components/ha-state-icon";
import "../../../components/ha-list";
import type { HomeAssistant } from "../../../types";
import "./entity-voice-settings";
import type { ExposeEntityDialogParams } from "./show-dialog-expose-entity";
declare class DialogExposeEntity extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _filter?;
    private _selected;
    showDialog(params: ExposeEntityDialogParams): Promise<void>;
    closeDialog(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _handleSelected;
    private _itemClicked;
    private _filterChanged;
    private _filterEntities;
    private _renderItem;
    private _expose;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-expose-entity": DialogExposeEntity;
    }
}
export {};
