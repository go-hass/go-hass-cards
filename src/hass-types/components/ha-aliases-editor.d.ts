import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-multi-textfield";
declare class AliasesEditor extends LitElement {
    hass: HomeAssistant;
    aliases: string[];
    disabled: boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _aliasesChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-aliases-editor": AliasesEditor;
    }
}
export {};
