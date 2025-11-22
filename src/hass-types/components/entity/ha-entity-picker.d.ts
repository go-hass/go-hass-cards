import { LitElement, type PropertyValues } from "lit";
import type { HaEntityPickerEntityFilterFunc } from "../../data/entity";
import type { HomeAssistant } from "../../types";
import "../ha-combo-box-item";
import "../ha-generic-picker";
import "../ha-svg-icon";
import "./state-badge";
export declare class HaEntityPicker extends LitElement {
    hass: HomeAssistant;
    autofocus: boolean;
    disabled: boolean;
    required: boolean;
    allowCustomEntity: any;
    showEntityId: boolean;
    label?: string;
    value?: string;
    helper?: string;
    placeholder?: string;
    searchLabel?: string;
    createDomains?: string[];
    /**
     * Show entities from specific domains.
     * @type {Array}
     * @attr include-domains
     */
    includeDomains?: string[];
    /**
     * Show no entities of these domains.
     * @type {Array}
     * @attr exclude-domains
     */
    excludeDomains?: string[];
    /**
     * Show only entities of these device classes.
     * @type {Array}
     * @attr include-device-classes
     */
    includeDeviceClasses?: string[];
    /**
     * Show only entities with these unit of measuments.
     * @type {Array}
     * @attr include-unit-of-measurement
     */
    includeUnitOfMeasurement?: string[];
    /**
     * List of allowed entities to show.
     * @type {Array}
     * @attr include-entities
     */
    includeEntities?: string[];
    /**
     * List of entities to be excluded.
     * @type {Array}
     * @attr exclude-entities
     */
    excludeEntities?: string[];
    entityFilter?: HaEntityPickerEntityFilterFunc;
    hideClearIcon: boolean;
    addButton: boolean;
    private _picker?;
    protected firstUpdated(changedProperties: PropertyValues): void;
    private _valueRenderer;
    private get _showEntityId();
    private _rowRenderer;
    private _getAdditionalItems;
    private _getCreateItems;
    private _getEntitiesMemoized;
    private _getItems;
    protected render(): import("lit-html").TemplateResult<1>;
    private _searchFn;
    open(): Promise<void>;
    private _valueChanged;
    private _setValue;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-picker": HaEntityPicker;
    }
}
