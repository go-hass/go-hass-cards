import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog";
import "../../../../components/ha-dialog-header";
import "../../../../components/ha-tab-group";
import "../../../../components/ha-tab-group-tab";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import "../card-editor/hui-entity-picker-table";
import "./hui-badge-picker";
import type { CreateBadgeDialogParams } from "./show-create-badge-dialog";
declare global {
    interface HASSDomEvents {
        "selected-changed": SelectedChangedEvent;
    }
}
interface SelectedChangedEvent {
    selectedEntities: string[];
}
export declare class HuiCreateDialogBadge extends LitElement implements HassDialog<CreateBadgeDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _containerConfig;
    private _selectedEntities;
    private _currTab;
    showDialog(params: CreateBadgeDialogParams): Promise<void>;
    closeDialog(): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _ignoreKeydown;
    static get styles(): CSSResultGroup;
    private _handleBadgePicked;
    private _handleTabChanged;
    private _handleSelectedChanged;
    private _cancel;
    private _suggestBadges;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-create-badge": HuiCreateDialogBadge;
    }
}
export {};
