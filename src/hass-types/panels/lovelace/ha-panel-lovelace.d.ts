import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../layouts/hass-error-screen";
import "../../layouts/hass-loading-screen";
import type { HomeAssistant, PanelInfo, Route } from "../../types";
import "./hui-root";
import "../../components/ha-button";
interface LovelacePanelConfig {
    mode: "yaml" | "storage";
}
declare global {
    interface HASSDomEvents {
        "strategy-config-changed": undefined;
    }
}
export declare class LovelacePanel extends LitElement {
    panel?: PanelInfo<LovelacePanelConfig>;
    hass?: HomeAssistant;
    narrow: boolean;
    route?: Route;
    private _panelState;
    private _errorMsg?;
    private lovelace?;
    private _ignoreNextUpdateEvent;
    private _fetchConfigOnConnect;
    private _unsubUpdates?;
    private _loading;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): TemplateResult | undefined;
    protected willUpdate(changedProps: PropertyValues): void;
    protected firstUpdated(changedProps: PropertyValues): void;
    protected updated(changedProperties: PropertyValues): void;
    private _debounceRegistriesChanged;
    private _registriesChanged;
    private _strategyConfigChanged;
    private _askRegenerateStrategyConfig;
    private _regenerateStrategyConfig;
    private _handleConnectionStatus;
    private _regenerateConfig;
    private _subscribeUpdates;
    private _closeEditor;
    private _lovelaceChanged;
    get urlPath(): string;
    private _forceFetchConfig;
    private _fetchConfig;
    private _checkLovelaceConfig;
    private _setLovelaceConfig;
    private _updateLovelace;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-lovelace": LovelacePanel;
    }
}
export {};
