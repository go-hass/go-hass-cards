import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { EntitySelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../entity/ha-entities-picker";
import "../entity/ha-entity-picker";
export declare class HaEntitySelector extends LitElement {
    hass: HomeAssistant;
    selector: EntitySelector;
    private _entitySources?;
    value?: any;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    private _createDomains;
    private _hasIntegration;
    protected willUpdate(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected updated(changedProps: PropertyValues): void;
    private _filterEntities;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-entity": HaEntitySelector;
    }
}
