import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/entity/state-badge";
import type { HomeAssistant } from "../../../types";
import "../components/hui-warning-element";
import type { LovelacePictureElementEditor } from "../types";
import type { LovelaceElement, StateIconElementConfig } from "./types";
export declare class HuiStateIconElement extends LitElement implements LovelaceElement {
    static getConfigElement(): Promise<LovelacePictureElementEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): StateIconElementConfig;
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: StateIconElementConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
    private _handleAction;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-state-icon-element": HuiStateIconElement;
    }
}
