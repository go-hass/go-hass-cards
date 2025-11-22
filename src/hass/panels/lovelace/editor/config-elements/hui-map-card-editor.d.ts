import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import "../../../../components/ha-formfield";
import "../../../../components/ha-selector/ha-selector-select";
import "../../../../components/ha-switch";
import type { HomeAssistant } from "../../../../types";
import type { MapCardConfig } from "../../cards/types";
import "../../components/hui-entity-editor";
import type { LovelaceCardEditor } from "../../types";
export declare const mapEntitiesConfigStruct: import("superstruct").Struct<string | {
    unit: string;
    name: string;
    focus: boolean;
    attribute: string;
    entity: string;
    label_mode: string;
}, null>;
export declare class HuiMapCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    private _configEntities?;
    private _possibleGeoSources?;
    private _schema;
    setConfig(config: MapCardConfig): void;
    private _geoSourcesStrings;
    get _geo_location_sources(): string[];
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _selectSchema;
    private _entitiesValueChanged;
    private _geoSourcesChanged;
    private _valueChanged;
    protected willUpdate(): void;
    private _computeLabelCallback;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-map-card-editor": HuiMapCardEditor;
    }
}
