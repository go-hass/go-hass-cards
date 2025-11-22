import { LitElement } from "lit";
import "../../../../../components/ha-tooltip";
export declare class HuiEnergyGraphChip extends LitElement {
    tooltip?: string;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-energy-graph-chip": HuiEnergyGraphChip;
    }
}
