import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog";
import "../../../../components/ha-dialog-header";
import "../../../../components/ha-tab-group";
import "../../../../components/ha-tab-group-tab";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import "./hui-card-picker";
import "./hui-entity-picker-table";
import type { CreateCardDialogParams } from "./show-create-card-dialog";
declare global {
    interface HASSDomEvents {
        "selected-changed": SelectedChangedEvent;
    }
}
interface SelectedChangedEvent {
    selectedEntities: string[];
}
export declare class HuiCreateDialogCard extends LitElement implements HassDialog<CreateCardDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _containerConfig;
    private _selectedEntities;
    private _currTab;
    private _narrow;
    showDialog(params: CreateCardDialogParams): Promise<void>;
    closeDialog(): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _ignoreKeydown;
    static get styles(): CSSResultGroup;
    private _handleCardPicked;
    private _handleTabChanged;
    private _handleSelectedChanged;
    private _cancel;
    private _suggestCards;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-create-card": HuiCreateDialogCard;
    }
}
export {};
