import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
declare class HaLabelBadge extends LitElement {
    label?: string;
    description?: string;
    image?: string;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
    protected updated(changedProperties: PropertyValues): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-label-badge": HaLabelBadge;
    }
}
export {};
