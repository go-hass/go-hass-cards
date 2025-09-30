import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-control-slider";
import type { LightColor, LightEntity } from "../../../../data/light";
import type { HomeAssistant } from "../../../../types";
declare global {
    interface HASSDomEvents {
        "color-changed": LightColor;
    }
}
export declare const generateColorTemperatureGradient: (min: number, max: number) => string;
declare class LightColorTempPicker extends LitElement {
    hass: HomeAssistant;
    stateObj: LightEntity;
    private _ctPickerValue?;
    private _isInteracting?;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _generateTemperatureGradient;
    private _updateSliderValues;
    willUpdate(changedProps: PropertyValues): void;
    private _ctColorCursorMoved;
    private _throttleUpdateColorTemp;
    private _ctColorChanged;
    private _updateColorTemp;
    private _applyColor;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "light-color-temp-picker": LightColorTempPicker;
    }
}
export {};
