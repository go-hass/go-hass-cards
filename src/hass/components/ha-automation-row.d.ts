import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-icon-button";
export declare class HaAutomationRow extends LitElement {
    leftChevron: boolean;
    collapsed: boolean;
    selected: boolean;
    sortSelected: boolean;
    disabled: boolean;
    buildingBlock: boolean;
    highlight?: boolean;
    private _rowElement?;
    protected render(): TemplateResult;
    private _handleExpand;
    private _handleKeydown;
    focus(): void;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-row": HaAutomationRow;
    }
    interface HASSDomEvents {
        "toggle-collapsed": undefined;
        "stop-sort-selection": undefined;
        "copy-row": undefined;
        "cut-row": undefined;
        "delete-row": undefined;
    }
}
