import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../../types";
import "../ha-alert";
import "../ha-selector/ha-selector";
import type { HaFormDataContainer, HaFormElement, HaFormSchema } from "./types";
export declare class HaForm extends LitElement implements HaFormElement {
    hass?: HomeAssistant;
    narrow: boolean;
    data: HaFormDataContainer;
    schema: readonly HaFormSchema[];
    error?: Record<string, string | string[]>;
    warning?: Record<string, string>;
    disabled: boolean;
    computeError?: (schema: any, error: any) => string;
    computeWarning?: (schema: any, warning: any) => string;
    computeLabel?: (schema: any, data: HaFormDataContainer) => string;
    computeHelper?: (schema: any) => string | undefined;
    localizeValue?: (key: string) => string;
    protected getFormProperties(): Record<string, any>;
    focus(): Promise<void>;
    protected willUpdate(changedProps: PropertyValues): void;
    static shadowRootOptions: ShadowRootInit;
    protected render(): TemplateResult;
    protected fieldElementName(type: string): string;
    private _generateContext;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    protected addValueChangedListener(element: Element | ShadowRoot): void;
    private _computeLabel;
    private _computeHelper;
    private _computeError;
    private _computeWarning;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-form": HaForm;
    }
}
