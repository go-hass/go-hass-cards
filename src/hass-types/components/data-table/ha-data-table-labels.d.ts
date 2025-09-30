import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { LabelRegistryEntry } from "../../data/label_registry";
import "../ha-label";
import "../chips/ha-chip-set";
import "../ha-button-menu";
import "../ha-icon";
import "../ha-list-item";
declare class HaDataTableLabels extends LitElement {
    labels: LabelRegistryEntry[];
    protected render(): TemplateResult;
    private _renderLabel;
    private _labelClicked;
    protected _handleIconOverflowMenuOpened(e: any): void;
    protected _handleIconOverflowMenuClosed(): void;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-data-table-labels": HaDataTableLabels;
    }
    interface HASSDomEvents {
        "label-clicked": {
            label: LabelRegistryEntry;
        };
    }
}
export {};
