import { LitElement, nothing } from "lit";
import "../../../../components/entity/ha-entity-picker";
import "../../../../components/ha-theme-picker";
import type { HomeAssistant } from "../../../../types";
import type { MediaControlCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiMediaControlCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: MediaControlCardConfig): void;
    get _entity(): string;
    get _theme(): string;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-media-control-card-editor": HuiMediaControlCardEditor;
    }
}
