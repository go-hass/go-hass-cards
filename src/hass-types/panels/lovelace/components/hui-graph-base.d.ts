import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
export declare class HuiGraphBase extends LitElement {
    coordinates?: number[][];
    yAxisOrigin?: number;
    private _path?;
    protected render(): TemplateResult;
    willUpdate(changedProps: PropertyValues): void;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-graph-base": HuiGraphBase;
    }
}
