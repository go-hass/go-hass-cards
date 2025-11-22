import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../components/ha-big-number";
import "../../components/ha-control-circular-slider";
import "../../components/ha-outlined-icon-button";
import "../../components/ha-svg-icon";
import type { HumidifierEntity } from "../../data/humidifier";
import type { HomeAssistant } from "../../types";
export declare class HaStateControlHumidifierHumidity extends LitElement {
    hass: HomeAssistant;
    stateObj: HumidifierEntity;
    showSecondary: boolean;
    showCurrentAsPrimary: boolean;
    preventInteractionOnScroll: boolean;
    private _targetHumidity?;
    private _sizeController;
    protected willUpdate(changedProp: PropertyValues): void;
    private _step;
    private get _min();
    private get _max();
    private _valueChanged;
    private _valueChanging;
    private _debouncedCallService;
    private _callService;
    private _handleButton;
    private _renderLabel;
    private _renderButtons;
    private _renderPrimary;
    private _renderSecondary;
    private _renderTarget;
    private _renderCurrent;
    private _renderInfo;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-control-humidifier-humidity": HaStateControlHumidifierHumidity;
    }
}
