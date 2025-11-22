import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import type { HASSDomEvent } from "../../../../common/dom/fire_event";
import type { HaFormSchema, SchemaUnion } from "../../../../components/ha-form/types";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-icon-button-arrow-next";
import "../../../../components/ha-icon-button-arrow-prev";
import "../../../../components/ha-tab-group";
import "../../../../components/ha-tab-group-tab";
import type { LovelaceCardConfig } from "../../../../data/lovelace/config/card";
import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
import type { HomeAssistant } from "../../../../types";
import type { StackCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
import "../card-editor/hui-card-element-editor";
import type { HuiCardElementEditor } from "../card-editor/hui-card-element-editor";
import "../card-editor/hui-card-picker";
import type { ConfigChangedEvent } from "../hui-element-editor";
import type { GUIModeChangedEvent } from "../types";
declare const SCHEMA: readonly [{
    readonly name: "title";
    readonly selector: {
        readonly text: {};
    };
}];
export declare class HuiStackCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    lovelace?: LovelaceConfig;
    protected _clipboard?: LovelaceCardConfig;
    protected _config?: StackCardConfig;
    protected _selectedCard: number;
    protected _GUImode: boolean;
    protected _guiModeAvailable?: boolean;
    protected _keys: Map<string, string>;
    protected _schema: readonly HaFormSchema[];
    protected _cardEditorEl?: HuiCardElementEditor;
    setConfig(config: Readonly<StackCardConfig>): void;
    focusYamlEditor(): void;
    protected formData(): object;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _getKey;
    protected _handleAddCard(): Promise<void>;
    protected _handleSelectedCard(ev: any): void;
    protected _handleConfigChanged(ev: HASSDomEvent<ConfigChangedEvent>): void;
    protected _handleCardPicked(ev: any): void;
    protected _handleCopyCard(): void;
    protected _handleCutCard(): void;
    protected _handleDeleteCard(): void;
    protected _handleMove(ev: Event): void;
    protected _handleGUIModeChanged(ev: HASSDomEvent<GUIModeChangedEvent>): void;
    protected _toggleMode(): void;
    protected _valueChanged(ev: CustomEvent): void;
    protected _computeLabelCallback: (schema: SchemaUnion<typeof SCHEMA>) => string;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-stack-card-editor": HuiStackCardEditor;
    }
}
export {};
