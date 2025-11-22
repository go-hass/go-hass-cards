import { LitElement, nothing } from "lit";
import type { HaEntityPickerEntityFilterFunc } from "../../data/entity";
import type { HomeAssistant } from "../../types";
import "../ha-sortable";
import "./ha-entity-picker";
declare class HaEntitiesPicker extends LitElement {
    hass?: HomeAssistant;
    value?: string[];
    disabled: boolean;
    required: boolean;
    label?: string;
    placeholder?: string;
    helper?: string;
    /**
     * Show entities from specific domains.
     * @type {string}
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
     * List of allowed entities to show. Will ignore all other filters.
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
    createDomains?: string[];
    reorder: boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _entityMoved;
    private _excludeEntities;
    private get _currentEntities();
    private _updateEntities;
    private _entityChanged;
    private _addEntity;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entities-picker": HaEntitiesPicker;
    }
}
export {};
