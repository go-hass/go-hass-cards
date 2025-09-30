import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { Selector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
export declare class HaSelector extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    name?: string;
    selector: Selector;
    value?: any;
    label?: string;
    helper?: string;
    localizeValue?: (key: string) => string;
    placeholder?: any;
    disabled: boolean;
    required: boolean;
    context?: Record<string, any>;
    focus(): Promise<void>;
    private get _type();
    protected willUpdate(changedProps: PropertyValues): void;
    private _handleLegacySelector;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector": HaSelector;
    }
}
