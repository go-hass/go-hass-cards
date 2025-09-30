import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { SortableInstance } from "../resources/sortable";
declare global {
    interface HASSDomEvents {
        "item-moved": {
            oldIndex: number;
            newIndex: number;
        };
        "item-added": {
            index: number;
            data: any;
            item: any;
        };
        "item-removed": {
            index: number;
        };
        "drag-start": undefined;
        "drag-end": undefined;
    }
}
export type HaSortableOptions = Omit<SortableInstance.SortableOptions, "onStart" | "onChoose" | "onEnd" | "onUpdate" | "onAdd" | "onRemove">;
export declare class HaSortable extends LitElement {
    private _sortable?;
    disabled: boolean;
    noStyle: boolean;
    draggableSelector?: string;
    handleSelector?: string;
    /**
     * Selectors that do not lead to dragging (String or Function)
     * https://github.com/SortableJS/Sortable?tab=readme-ov-file#filter-option
     * */
    filter?: string;
    group?: string | SortableInstance.GroupOptions;
    invertSwap: boolean;
    options?: HaSortableOptions;
    rollback: boolean;
    protected updated(changedProperties: PropertyValues<this>): void;
    private _shouldBeDestroy;
    disconnectedCallback(): void;
    connectedCallback(): void;
    protected createRenderRoot(): this;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _createSortable;
    private _handleUpdate;
    private _handleAdd;
    private _handleRemove;
    private _handleEnd;
    private _handleStart;
    private _handleChoose;
    private _destroySortable;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-sortable": HaSortable;
    }
}
