import type { HomeAssistant } from "../../../types";
import type { LovelacePictureElementEditor } from "../types";
import type { ConditionalElementConfig, LovelaceElement } from "./types";
declare class HuiConditionalElement extends HTMLElement implements LovelaceElement {
    static getConfigElement(): Promise<LovelacePictureElementEditor>;
    _hass?: HomeAssistant;
    private _config?;
    private _elements;
    setConfig(config: ConditionalElementConfig): void;
    set hass(hass: HomeAssistant);
    private _updateElements;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-conditional-element": HuiConditionalElement;
    }
}
export {};
