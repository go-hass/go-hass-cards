import type { TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-control-button";
import "../../components/ha-control-button-group";
import "../../components/ha-control-slider";
import "../../components/ha-svg-icon";
import type { ValveEntity } from "../../data/valve";
import type { HomeAssistant } from "../../types";
type ValveButton = "open" | "close" | "stop" | "none";
export declare const getValveButtons: import("memoize-one").MemoizedFn<(stateObj: ValveEntity) => ValveButton[]>;
export declare class HaStateControlValveButtons extends LitElement {
    hass: HomeAssistant;
    stateObj: ValveEntity;
    private _onOpenTap;
    private _onCloseTap;
    private _onStopTap;
    protected renderButton(button: ValveButton | undefined): TemplateResult<1> | typeof nothing;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-control-valve-buttons": HaStateControlValveButtons;
    }
}
export {};
