import { LitElement, nothing } from "lit";
import "../../../components/buttons/ha-call-service-button";
import type { HomeAssistant } from "../../../types";
import type { LovelaceElement, ServiceButtonElementConfig } from "./types";
import type { LovelacePictureElementEditor } from "../types";
export declare class HuiServiceButtonElement extends LitElement implements LovelaceElement {
    static getConfigElement(): Promise<LovelacePictureElementEditor>;
    static getStubConfig(hass: HomeAssistant): ServiceButtonElementConfig;
    hass?: HomeAssistant;
    private _config?;
    private _domain?;
    private _service?;
    setConfig(config: ServiceButtonElementConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-service-button-element": HuiServiceButtonElement;
    }
}
