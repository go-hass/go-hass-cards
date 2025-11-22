import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HassServiceTarget } from "home-assistant-js-websocket";
import "./ha-progress-button";
import type { HomeAssistant } from "../../types";
import type { Appearance } from "../ha-button";
declare class HaCallServiceButton extends LitElement {
    hass: HomeAssistant;
    disabled: boolean;
    progress: boolean;
    domain: string;
    service: string;
    target: HassServiceTarget;
    data: {};
    confirmation?: any;
    appearance: Appearance;
    render(): TemplateResult;
    private _callService;
    private _buttonTapped;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-call-service-button": HaCallServiceButton;
    }
}
declare global {
    interface HASSDomEvents {
        "hass-service-called": {
            domain: string;
            service: string;
            target: HassServiceTarget;
            data: object;
            success: boolean;
        };
    }
}
export {};
