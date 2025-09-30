import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../ha-svg-icon";
export declare class HaTimeline extends LitElement {
    label: boolean;
    raised: boolean;
    notEnabled: boolean;
    lastItem: boolean;
    icon?: string;
    moreItems?: TemplateResult[];
    private _showMore;
    protected render(): TemplateResult<1>;
    private _handleShowMore;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-timeline": HaTimeline;
    }
}
