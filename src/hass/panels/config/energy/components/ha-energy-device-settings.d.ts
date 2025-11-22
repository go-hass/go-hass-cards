import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-button";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-sortable";
import "../../../../components/ha-svg-icon";
import type { EnergyPreferences, EnergyPreferencesValidation } from "../../../../data/energy";
import type { StatisticsMetaData } from "../../../../data/recorder";
import type { HomeAssistant } from "../../../../types";
import "./ha-energy-validation-result";
export declare class EnergyDeviceSettings extends LitElement {
    hass: HomeAssistant;
    preferences: EnergyPreferences;
    statsMetadata?: Record<string, StatisticsMetaData>;
    validationResult?: EnergyPreferencesValidation;
    protected render(): TemplateResult;
    private _itemMoved;
    private _editDevice;
    private _addDevice;
    private _sanitizeParents;
    private _deleteDevice;
    private _savePreferences;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-energy-device-settings": EnergyDeviceSettings;
    }
}
