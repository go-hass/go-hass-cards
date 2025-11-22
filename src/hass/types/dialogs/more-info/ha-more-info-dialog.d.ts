import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-button-menu";
import "../../components/ha-dialog";
import "../../components/ha-dialog-header";
import "../../components/ha-icon-button";
import "../../components/ha-icon-button-prev";
import "../../components/ha-list-item";
import "../../components/ha-related-items";
import "../../state-summary/state-card-content";
import type { HomeAssistant } from "../../types";
import "./controls/more-info-default";
import "./ha-more-info-history-and-logbook";
import "./ha-more-info-info";
import "./ha-more-info-settings";
import "./more-info-content";
export interface MoreInfoDialogParams {
    entityId: string | null;
    view?: View;
    /** @deprecated Use `view` instead */
    tab?: View;
    data?: Record<string, any>;
}
type View = "info" | "history" | "settings" | "related";
interface ChildView {
    viewTag: string;
    viewTitle?: string;
    viewImport?: () => Promise<unknown>;
    viewParams?: any;
}
declare global {
    interface HASSDomEvents {
        "show-child-view": ChildView;
    }
    interface HASSDomEvents {
        "toggle-edit-mode": boolean;
    }
}
export declare class MoreInfoDialog extends LitElement {
    hass: HomeAssistant;
    large: boolean;
    private _parentEntityIds;
    private _entityId?;
    private _data?;
    private _currView;
    private _initialView;
    private _childView?;
    private _entry?;
    private _infoEditMode;
    private _isEscapeEnabled;
    private _sensorNumericDeviceClasses?;
    showDialog(params: MoreInfoDialogParams): void;
    private _loadEntityRegistryEntry;
    closeDialog(): void;
    private _shouldShowEditIcon;
    private _shouldShowHistory;
    private _getDeviceId;
    private _setView;
    private _goBack;
    private _resetInitialView;
    private _goToHistory;
    private _goToSettings;
    private _showChildView;
    private _goToDevice;
    private _goToEdit;
    private _toggleInfoEditMode;
    private _handleToggleInfoEditModeEvent;
    private _goToRelated;
    private _breadcrumbClick;
    private _loadNumericDeviceClasses;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected firstUpdated(changedProps: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    private _entryUpdated;
    private _enlarge;
    private _handleOpened;
    private _handleMoreInfoEvent;
    private _enableEscapeKeyClose;
    private _disableEscapeKeyClose;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-dialog": MoreInfoDialog;
    }
}
export {};
