import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/entity/ha-state-label-badge";
import type { HomeAssistant } from "../../../types";
import "../components/hui-warning-element";
import type { LovelaceElement, StateBadgeElementConfig } from "./types";
import type { LovelacePictureElementEditor } from "../types";
export declare class HuiStateBadgeElement extends LitElement implements LovelaceElement {
    static getConfigElement(): Promise<LovelacePictureElementEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): StateBadgeElementConfig;
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: StateBadgeElementConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _handleAction;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-state-badge-element": HuiStateBadgeElement;
    }
}
