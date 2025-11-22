import { LitElement, nothing } from "lit";
import "../../../components/ha-label-badge";
import "../../../components/ha-svg-icon";
import type { LovelaceSectionElement } from "../../../data/lovelace";
import type { LovelaceSectionConfig } from "../../../data/lovelace/config/section";
import type { HomeAssistant } from "../../../types";
export interface ErrorSectionConfig extends LovelaceSectionConfig {
    error: string;
}
export declare const createErrorSectionElement: (config: ErrorSectionConfig) => LovelaceSectionElement;
export declare const createErrorSectionConfig: (error: string) => ErrorSectionConfig;
export declare class HuiErrorSection extends LitElement implements LovelaceSectionElement {
    hass?: HomeAssistant;
    isStrategy: boolean;
    private _config?;
    setConfig(config: ErrorSectionConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-error-section": HuiErrorSection;
    }
}
