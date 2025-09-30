import { LitElement, nothing } from "lit";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { EntityHeadingBadgeConfig } from "../../heading-badges/types";
import type { LovelaceGenericElementEditor } from "../../types";
import "../conditions/ha-card-conditions-editor";
export declare const DEFAULT_CONFIG: Partial<EntityHeadingBadgeConfig>;
export declare class HuiHeadingEntityEditor extends LitElement implements LovelaceGenericElementEditor {
    hass?: HomeAssistant;
    preview: boolean;
    private _config?;
    setConfig(config: EntityHeadingBadgeConfig): void;
    private _schema;
    private _displayedElements;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    private _conditionChanged;
    private _computeLabelCallback;
    private _computeHelperCallback;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-heading-entity-editor": HuiHeadingEntityEditor;
    }
}
