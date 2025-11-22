import type { HassServiceTarget } from "home-assistant-js-websocket";
import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-checkbox";
import "./ha-icon-button";
import "./ha-selector/ha-selector";
import "./ha-service-picker";
import "./ha-service-section-icon";
import "./ha-settings-row";
import "./ha-yaml-editor";
export declare class HaServiceControl extends LitElement {
    hass: HomeAssistant;
    value?: {
        action: string;
        target?: HassServiceTarget;
        data?: Record<string, any>;
    };
    disabled: boolean;
    narrow: boolean;
    showAdvanced: boolean;
    showServiceId: boolean;
    hidePicker: boolean;
    hideDescription: boolean;
    private _value;
    private _checkedKeys;
    private _manifest?;
    private _yamlEditor?;
    private _stickySelector;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    private _getServiceInfo;
    private _getTargetedEntities;
    private _filterField;
    private _targetSelector;
    protected render(): import("lit-html").TemplateResult<1>;
    private _getSectionDescription;
    private _hasFilteredFields;
    private _renderField;
    private _selectorContext;
    private _localizeValueCallback;
    private _checkboxChanged;
    private _serviceChanged;
    private _entityPicked;
    private _targetChanged;
    private _serviceDataChanged;
    private _dataChanged;
    private _fetchManifest;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-service-control": HaServiceControl;
    }
}
