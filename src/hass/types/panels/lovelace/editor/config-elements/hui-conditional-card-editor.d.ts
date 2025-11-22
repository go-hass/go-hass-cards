import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-button";
import "../../../../components/ha-svg-icon";
import "../../../../components/ha-tab-group";
import "../../../../components/ha-tab-group-tab";
import type { LovelaceCardConfig } from "../../../../data/lovelace/config/card";
import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
import type { HomeAssistant } from "../../../../types";
import type { ConditionalCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
import "../card-editor/hui-card-element-editor";
import "../card-editor/hui-card-picker";
import "../conditions/ha-card-conditions-editor";
import "../hui-element-editor";
export declare class HuiConditionalCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    lovelace?: LovelaceConfig;
    protected _clipboard?: LovelaceCardConfig;
    private _config?;
    private _GUImode;
    private _guiModeAvailable?;
    private _cardTab;
    private _cardEditorEl?;
    setConfig(config: ConditionalCardConfig): void;
    focusYamlEditor(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _selectTab;
    private _toggleMode;
    private _setMode;
    private _handleGUIModeChanged;
    private _handleCardPicked;
    protected _handleCopyCard(): void;
    private _handleCardChanged;
    private _handleReplaceCard;
    private _conditionChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-conditional-card-editor": HuiConditionalCardEditor;
    }
}
