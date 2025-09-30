import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog-header";
import "../../../../components/ha-icon-button-toggle";
import type { EntityRegistryEntry } from "../../../../data/entity_registry";
import type { LightColor, LightEntity } from "../../../../data/light";
import type { HomeAssistant } from "../../../../types";
import "./light-color-rgb-picker";
import "./light-color-temp-picker";
import type { LightColorFavoriteDialogParams } from "./show-dialog-light-color-favorite";
export type LightPickerMode = "color_temp" | "color";
declare class DialogLightColorFavorite extends LitElement {
    hass: HomeAssistant;
    _dialogParams?: LightColorFavoriteDialogParams;
    _entry?: EntityRegistryEntry;
    _color?: LightColor;
    private _mode?;
    private _modes;
    private _dialog?;
    showDialog(dialogParams: LightColorFavoriteDialogParams): Promise<void>;
    closeDialog(): void;
    private _updateModes;
    private _computeCurrentColor;
    private _colorChanged;
    get stateObj(): LightEntity;
    private _cancel;
    private _cancelDialog;
    private _dialogClosed;
    private _save;
    private _modeChanged;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-light-color-favorite": DialogLightColorFavorite;
    }
}
export {};
