import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-hs-color-picker";
import "../../../../components/ha-icon";
import "../../../../components/ha-icon-button-prev";
import "../../../../components/ha-labeled-slider";
import type { LightColor, LightEntity } from "../../../../data/light";
import type { HomeAssistant } from "../../../../types";
declare global {
    interface HASSDomEvents {
        "color-changed": LightColor;
    }
}
declare class LightRgbColorPicker extends LitElement {
    hass: HomeAssistant;
    stateObj: LightEntity;
    private _cwSliderValue?;
    private _wwSliderValue?;
    private _wvSliderValue?;
    private _colorBrightnessSliderValue?;
    private _brightnessAdjusted?;
    private _hsPickerValue?;
    private _isInteracting?;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _updateSliderValues;
    willUpdate(changedProps: PropertyValues): void;
    private _hsColorCursorMoved;
    private _throttleUpdateColor;
    private _updateColor;
    private _nativeColorChanged;
    private _hsColorChanged;
    private _wvSliderChanged;
    private _applyColor;
    private _colorBrightnessSliderChanged;
    private _adjustColorBrightness;
    private _setRgbWColor;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "light-color-rgb-picker": LightRgbColorPicker;
    }
}
export {};
