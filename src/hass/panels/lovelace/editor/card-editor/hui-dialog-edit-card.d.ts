import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { HASSDomEvent } from "../../../../common/dom/fire_event";
import "../../../../components/ha-spinner";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog";
import "../../../../components/ha-dialog-header";
import "../../../../components/ha-icon-button";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import "../../cards/hui-card";
import "../../sections/hui-section";
import "./hui-card-element-editor";
import type { EditCardDialogParams } from "./show-edit-card-dialog";
declare global {
    interface HASSDomEvents {
        "reload-lovelace": undefined;
    }
    interface HTMLElementEventMap {
        "reload-lovelace": HASSDomEvent<undefined>;
    }
}
export declare class HuiDialogEditCard extends LitElement implements HassDialog<EditCardDialogParams> {
    hass: HomeAssistant;
    large: boolean;
    private _params?;
    private _cardConfig?;
    private _sectionConfig?;
    private _saving;
    private _error?;
    private _guiModeAvailable?;
    private _cardEditorEl?;
    private _GUImode;
    private _documentationURL?;
    private _dirty;
    showDialog(params: EditCardDialogParams): Promise<void>;
    closeDialog(): boolean;
    protected updated(changedProps: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _enlarge;
    private _ignoreKeydown;
    private _handleConfigChanged;
    private _handleGUIModeChanged;
    private _toggleMode;
    private _opened;
    private _cardConfigInSection;
    private get _canSave();
    private _confirmCancel;
    private _cancel;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-edit-card": HuiDialogEditCard;
    }
}
