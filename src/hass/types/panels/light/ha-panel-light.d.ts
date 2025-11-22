import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../components/ha-icon-button-arrow-prev";
import "../../components/ha-menu-button";
import type { HomeAssistant } from "../../types";
import "../lovelace/views/hui-view";
import "../lovelace/views/hui-view-container";
declare class PanelLight extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _viewIndex;
    private _lovelace?;
    private _searchParms;
    willUpdate(changedProps: PropertyValues): void;
    private _debounceRegistriesChanged;
    private _registriesChanged;
    private _back;
    protected render(): import("lit-html").TemplateResult<1>;
    private _setLovelace;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-light": PanelLight;
    }
}
export {};
