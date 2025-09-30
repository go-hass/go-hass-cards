import { LitElement, nothing } from "lit";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-form/ha-form";
import "../../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../../types";
import type { HeadingCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
import "./hui-heading-badges-editor";
export declare class HuiHeadingCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: HeadingCardConfig): void;
    private _schema;
    private _badges;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _badgesChanged;
    private _valueChanged;
    private _editBadge;
    private _updateBadge;
    private _computeLabelCallback;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-heading-card-editor": HuiHeadingCardEditor;
    }
}
