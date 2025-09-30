import type { Schema } from "js-yaml";
import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-code-editor";
import type { HaCodeEditor } from "./ha-code-editor";
import "./ha-button";
import "./ha-alert";
export declare class HaYamlEditor extends LitElement {
    hass: HomeAssistant;
    value?: any;
    yamlSchema: Schema;
    defaultValue?: any;
    isValid: boolean;
    label?: string;
    autoUpdate: boolean;
    readOnly: boolean;
    disableFullscreen: boolean;
    required: boolean;
    copyClipboard: boolean;
    hasExtraActions: boolean;
    showErrors: boolean;
    private _yaml;
    private _error;
    private _showingError;
    _codeEditor?: HaCodeEditor;
    setValue(value: any): void;
    protected firstUpdated(): void;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    focus(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _onChange;
    private _onBlur;
    get yaml(): string;
    private _copyYaml;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-yaml-editor": HaYamlEditor;
    }
}
