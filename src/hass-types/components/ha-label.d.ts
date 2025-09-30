import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
declare class HaLabel extends LitElement {
    dense: boolean;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-label": HaLabel;
    }
}
export {};
