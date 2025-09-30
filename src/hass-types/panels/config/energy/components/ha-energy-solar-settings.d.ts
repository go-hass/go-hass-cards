import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-button";
import "../../../../components/ha-icon-button";
import type { EnergyInfo, EnergyPreferences, EnergyPreferencesValidation } from "../../../../data/energy";
import type { StatisticsMetaData } from "../../../../data/recorder";
import type { HomeAssistant } from "../../../../types";
import "./ha-energy-validation-result";
export declare class EnergySolarSettings extends LitElement {
    hass: HomeAssistant;
    preferences: EnergyPreferences;
    statsMetadata?: Record<string, StatisticsMetaData>;
    validationResult?: EnergyPreferencesValidation;
    info?: EnergyInfo;
    protected render(): TemplateResult;
    private _addSource;
    private _editSource;
    private _deleteSource;
    private _savePreferences;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-energy-solar-settings": EnergySolarSettings;
    }
}
