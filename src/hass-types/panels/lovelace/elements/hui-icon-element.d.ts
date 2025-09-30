import { LitElement, nothing } from "lit";
import "../../../components/ha-icon";
import type { HomeAssistant } from "../../../types";
import type { IconElementConfig, LovelaceElement } from "./types";
import type { LovelacePictureElementEditor } from "../types";
export declare class HuiIconElement extends LitElement implements LovelaceElement {
    static getConfigElement(): Promise<LovelacePictureElementEditor>;
    static getStubConfig(): IconElementConfig;
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: IconElementConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _handleAction;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-icon-element": HuiIconElement;
    }
}
