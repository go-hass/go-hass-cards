import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../components/ha-big-number";
import "../../components/ha-control-circular-slider";
import "../../components/ha-outlined-icon-button";
import "../../components/ha-svg-icon";
import type { ClimateEntity } from "../../data/climate";
import type { HomeAssistant } from "../../types";
export declare class HaStateControlClimateTemperature extends LitElement {
    hass: HomeAssistant;
    stateObj: ClimateEntity;
    showSecondary: boolean;
    showCurrentAsPrimary: boolean;
    preventInteractionOnScroll: boolean;
    private _targetTemperature;
    private _selectTargetTemperature;
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
    private _handleSelectTemp;
    private _renderLabel;
    private _renderTemperatureButtons;
    private _renderTarget;
    private _renderCurrent;
    private _renderPrimary;
    private _renderSecondary;
    private _renderInfo;
    get _supportsTargetTemperature(): boolean;
    get _supportsTargetTemperatureRange(): boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-control-climate-temperature": HaStateControlClimateTemperature;
    }
}
