import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { CropOptions } from "../dialogs/image-cropper-dialog/show-image-cropper-dialog";
import type { HomeAssistant } from "../types";
import "./ha-button";
import "./ha-file-upload";
export declare class HaPictureUpload extends LitElement {
    hass: HomeAssistant;
    value: string | null;
    label?: string;
    secondary?: string;
    supports?: string;
    currentImageAltText?: string;
    crop: boolean;
    selectMedia: boolean;
    fullMedia: boolean;
    contentIdHelper?: string;
    cropOptions?: CropOptions;
    original: boolean;
    size: number;
    private _uploading;
    render(): TemplateResult;
    private _handleChangeClick;
    private _handleFilePicked;
    private _handleFileCleared;
    private _cropFile;
    private _uploadFile;
    private _chooseMedia;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-picture-upload": HaPictureUpload;
    }
}
