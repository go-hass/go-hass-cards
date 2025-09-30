import { LitElement } from "lit";
import type { HomeAssistant } from "../../types";
import "./ha-form";
import "../ha-expansion-panel";
import type { HaFormDataContainer, HaFormElement, HaFormExpandableSchema, HaFormSchema } from "./types";
export declare class HaFormExpandable extends LitElement implements HaFormElement {
    hass: HomeAssistant;
    data: HaFormDataContainer;
    schema: HaFormExpandableSchema;
    disabled: boolean;
    computeLabel?: (schema: HaFormSchema, data?: HaFormDataContainer, options?: {
        path?: string[];
    }) => string;
    computeHelper?: (schema: HaFormSchema, options?: {
        path?: string[];
    }) => string;
    localizeValue?: (key: string) => string;
    private _renderDescription;
    private _computeLabel;
    private _computeHelper;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-form-expandable": HaFormExpandable;
    }
}
