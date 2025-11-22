import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-button-menu";
import "../../../../components/ha-grid-size-picker";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-list-item";
import "../../../../components/ha-settings-row";
import "../../../../components/ha-slider";
import "../../../../components/ha-svg-icon";
import "../../../../components/ha-switch";
import "../../../../components/ha-yaml-editor";
import type { LovelaceCardConfig } from "../../../../data/lovelace/config/card";
import type { LovelaceSectionConfig } from "../../../../data/lovelace/config/section";
import type { HomeAssistant } from "../../../../types";
export declare class HuiCardLayoutEditor extends LitElement {
    hass: HomeAssistant;
    config: LovelaceCardConfig;
    sectionConfig: LovelaceSectionConfig;
    private _defaultGridOptions?;
    private _yamlMode;
    private _uiAvailable;
    private _preciseMode;
    private _cardElement?;
    private _mergedOptions;
    private _computeCardGridSize;
    private _isDefault;
    private _configGridOptions;
    render(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    private _updateDefaultGridOptions;
    protected updated(changedProps: PropertyValues<this>): void;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    private _handleAction;
    private _gridSizeChanged;
    private _yamlChanged;
    private _fullWidthChanged;
    private _preciseModeChanged;
    private _updateGridOptions;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-card-layout-editor": HuiCardLayoutEditor;
    }
}
