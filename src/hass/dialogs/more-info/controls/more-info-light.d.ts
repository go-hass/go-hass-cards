import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-attribute-icon";
import "../../../components/ha-attributes";
import "../../../components/ha-control-select-menu";
import "../../../components/ha-icon-button-group";
import "../../../components/ha-icon-button-toggle";
import "../../../components/ha-list-item";
import type { ExtEntityRegistryEntry } from "../../../data/entity_registry";
import type { LightEntity } from "../../../data/light";
import "../../../state-control/ha-state-control-toggle";
import "../../../state-control/light/ha-state-control-light-brightness";
import type { HomeAssistant } from "../../../types";
import "../components/ha-more-info-control-select-container";
import "../components/ha-more-info-state-header";
import "../components/lights/ha-favorite-color-button";
import "../components/lights/ha-more-info-light-favorite-colors";
import "../components/lights/light-color-rgb-picker";
import "../components/lights/light-color-temp-picker";
declare class MoreInfoLight extends LitElement {
    hass: HomeAssistant;
    stateObj?: LightEntity;
    entry?: ExtEntityRegistryEntry | null;
    editMode?: boolean;
    private _effect?;
    private _mainControl;
    protected updated(changedProps: PropertyValues<typeof this>): void;
    private _setMainControl;
    private _resetMainControl;
    private get _stateOverride();
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _toggle;
    private _setWhite;
    private _handleEffect;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-light": MoreInfoLight;
    }
}
export {};
