import { LitElement } from "lit";
import type { ExtEntityRegistryEntry } from "../../data/entity_registry";
import type { HomeAssistant } from "../../types";
import "./ha-more-info-history";
import "./ha-more-info-logbook";
import "./more-info-content";
export declare class MoreInfoInfo extends LitElement {
    hass: HomeAssistant;
    entityId: string;
    entry?: ExtEntityRegistryEntry | null;
    editMode?: boolean;
    data?: Record<string, any>;
    private _sensorNumericDeviceClasses?;
    private _loadNumericDeviceClasses;
    protected firstUpdated(changedProps: any): void;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-info": MoreInfoInfo;
    }
}
