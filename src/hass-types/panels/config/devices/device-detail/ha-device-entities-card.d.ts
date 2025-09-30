import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-card";
import "../../../../components/ha-icon";
import "../../../../components/ha-list";
import "../../../../components/ha-list-item";
import type { HomeAssistant } from "../../../../types";
import type { EntityRegistryStateEntry } from "../ha-config-device-page";
export declare class HaDeviceEntitiesCard extends LitElement {
    header: string;
    deviceName: string;
    hass: HomeAssistant;
    entities: EntityRegistryStateEntry[];
    showHidden: boolean;
    private _extDisabledEntityEntries?;
    private _entityRows;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): TemplateResult;
    private _toggleShowHidden;
    private _renderEntity;
    private _renderEntry;
    private _openEditEntry;
    private _addToLovelaceView;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-device-entities-card": HaDeviceEntitiesCard;
    }
}
