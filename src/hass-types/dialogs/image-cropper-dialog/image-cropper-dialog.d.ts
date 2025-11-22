import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-button";
import "../../components/ha-dialog";
import type { HomeAssistant } from "../../types";
import type { HaImageCropperDialogParams } from "./show-image-cropper-dialog";
export declare class HaImagecropperDialog extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _open;
    private _image;
    private _cropper?;
    private _isTargetAspectRatio?;
    showDialog(params: HaImageCropperDialogParams): void;
    closeDialog(): void;
    protected updated(changedProperties: PropertyValues): void;
    private _checkMatchAspectRatio;
    protected render(): TemplateResult;
    private _cropImage;
    private _useOriginal;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "image-cropper-dialog": HaImagecropperDialog;
    }
}
