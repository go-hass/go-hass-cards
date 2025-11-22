import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../components/ha-big-number";
import "../../components/ha-control-circular-slider";
import "../../components/ha-outlined-icon-button";
import "../../components/ha-svg-icon";
import type { WaterHeaterEntity } from "../../data/water_heater";
import type { HomeAssistant } from "../../types";
export declare class HaStateControlWaterHeaterTemperature extends LitElement {
    hass: HomeAssistant;
    stateObj: WaterHeaterEntity;
    showCurrent: boolean;
    preventInteractionOnScroll: boolean;
    private _targetTemperature?;
    private _sizeController;
    protected willUpdate(changedProp: PropertyValues): void;
    private get _step();
    private get _min();
    private get _max();
    private _valueChanged;
    private _valueChanging;
    private _debouncedCallService;
    private _callService;
    private _handleButton;
    private _renderLabel;
    private _renderButtons;
    private _renderTargetTemperature;
    private _renderCurrentTemperature;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-control-water_heater-temperature": HaStateControlWaterHeaterTemperature;
    }
}
