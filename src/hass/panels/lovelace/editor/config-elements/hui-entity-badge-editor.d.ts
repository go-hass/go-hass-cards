import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { EntityBadgeConfig } from "../../badges/types";
import type { LovelaceBadgeEditor } from "../../types";
import "../hui-sub-element-editor";
import "./hui-card-features-editor";
export declare class HuiEntityBadgeEditor extends LitElement implements LovelaceBadgeEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: EntityBadgeConfig): void;
    private _schema;
    _displayedElements: import("memoize-one").MemoizedFn<(config: EntityBadgeConfig) => string[]>;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    private _computeLabelCallback;
    private _computeHelperCallback;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-entity-badge-editor": HuiEntityBadgeEditor;
    }
}
