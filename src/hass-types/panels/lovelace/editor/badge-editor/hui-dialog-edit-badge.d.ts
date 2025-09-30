import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { HASSDomEvent } from "../../../../common/dom/fire_event";
import "../../../../components/ha-dialog";
import "../../../../components/ha-dialog-header";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-spinner";
import "../../../../components/ha-button";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import "../../badges/hui-badge";
import "../../sections/hui-section";
import "./hui-badge-element-editor";
import type { EditBadgeDialogParams } from "./show-edit-badge-dialog";
declare global {
    interface HASSDomEvents {
        "reload-lovelace": undefined;
    }
    interface HTMLElementEventMap {
        "reload-lovelace": HASSDomEvent<undefined>;
    }
}
export declare class HuiDialogEditBadge extends LitElement implements HassDialog<EditBadgeDialogParams> {
    hass: HomeAssistant;
    large: boolean;
    private _params?;
    private _badgeConfig?;
    private _containerConfig;
    private _saving;
    private _error?;
    private _guiModeAvailable?;
    private _badgeEditorEl?;
    private _GUImode;
    private _documentationURL?;
    private _dirty;
    private _isEscapeEnabled;
    showDialog(params: EditBadgeDialogParams): Promise<void>;
    closeDialog(): boolean;
    protected updated(changedProps: PropertyValues): void;
    private _enableEscapeKeyClose;
    private _disableEscapeKeyClose;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _enlarge;
    private _ignoreKeydown;
    private _handleConfigChanged;
    private _handleGUIModeChanged;
    private _toggleMode;
    private _opened;
    private get _canSave();
    private _confirmCancel;
    private _cancel;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-edit-badge": HuiDialogEditBadge;
    }
}
