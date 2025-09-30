import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { AttributeSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../entity/ha-entity-attribute-picker";
export declare class HaSelectorAttribute extends LitElement {
    hass: HomeAssistant;
    selector: AttributeSelector;
    value?: any;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    context?: {
        filter_entity?: string | string[];
    };
    protected render(): import("lit-html").TemplateResult<1>;
    protected updated(changedProps: PropertyValues): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-attribute": HaSelectorAttribute;
    }
}
