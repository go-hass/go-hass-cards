import "@material/mwc-linear-progress/mwc-linear-progress";
import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-button";
import "./ha-icon-button";
import type { LocalizeFunc } from "../common/translations/localize";
declare global {
    interface HASSDomEvents {
        "file-picked": {
            files: File[];
        };
        "files-cleared": undefined;
    }
}
export declare class HaFileUpload extends LitElement {
    hass?: HomeAssistant;
    localize?: LocalizeFunc;
    accept: string;
    icon?: string;
    label?: string;
    secondary?: string;
    uploadingLabel?: string;
    deleteLabel?: string;
    supports?: string;
    value?: File | File[] | FileList | string;
    multiple: boolean;
    disabled: boolean;
    uploading: boolean;
    progress?: number;
    autoOpenFileDialog: boolean;
    private _drag;
    private _input?;
    protected firstUpdated(changedProperties: PropertyValues): void;
    private get _name();
    render(): TemplateResult;
    private _openFilePicker;
    private _handleDrop;
    private _handleDragStart;
    private _handleDragEnd;
    private _handleFilePicked;
    private _clearValue;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-file-upload": HaFileUpload;
    }
}
