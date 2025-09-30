import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-spinner";
import "../../../components/ha-yaml-editor";
import type { HaYamlEditor } from "../../../components/ha-yaml-editor";
import type { LovelaceConfig } from "../../../data/lovelace/config/types";
import type { HomeAssistant } from "../../../types";
import type { LovelaceConfigForm, LovelaceGenericElementEditor } from "../types";
import type { EditDetailElementEvent, EditSubElementEvent, GUIModeChangedEvent } from "./types";
export interface ConfigChangedEvent<T extends object = object> {
    config: T;
    error?: string;
    guiModeAvailable?: boolean;
}
declare global {
    interface HASSDomEvents {
        "config-changed": ConfigChangedEvent;
        "GUImode-changed": GUIModeChangedEvent;
        "edit-detail-element": EditDetailElementEvent;
        "edit-sub-element": EditSubElementEvent;
    }
}
export interface UIConfigChangedEvent<T extends object = object> extends Event {
    detail: {
        config: T;
    };
}
export declare abstract class HuiElementEditor<T extends object = object, C = any> extends LitElement {
    hass: HomeAssistant;
    lovelace?: LovelaceConfig;
    context?: C;
    private _config?;
    private _configElement?;
    private _subElementEditorConfig?;
    private _guiMode;
    private _errors?;
    private _pendingYamlError?;
    private _yamlError;
    private _warnings?;
    private _guiSupported?;
    private _loading;
    _yamlEditor?: HaYamlEditor;
    private _loadCount;
    get value(): T | undefined;
    set value(config: T | undefined);
    private _setConfig;
    get hasWarning(): boolean;
    get hasError(): boolean;
    get GUImode(): boolean;
    set GUImode(guiMode: boolean);
    toggleMode(): void;
    focusYamlEditor(): void;
    protected getConfigElement(): Promise<LovelaceGenericElementEditor | undefined>;
    protected getConfigForm(): Promise<LovelaceConfigForm | undefined>;
    protected renderConfigElement(): TemplateResult;
    private _renderSubElement;
    private _subElementChanged;
    private _goBack;
    private _editSubElement;
    protected render(): TemplateResult;
    protected updated(changedProperties: PropertyValues): void;
    private _handleUIConfigChanged;
    private _handleYAMLChanged;
    private _debounceYamlError;
    private _onBlurYaml;
    protected unloadConfigElement(): Promise<void>;
    protected loadConfigElement(): Promise<void>;
    private _updateConfigElement;
    private _ignoreKeydown;
    static styles: CSSResultGroup;
}
