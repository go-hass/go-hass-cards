import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { LocalizeFunc } from "../common/translations/localize";
import "../components/ha-alert";
import "../components/ha-list";
import "../components/ha-button";
import "../components/ha-list-item";
import "../components/ha-radio";
import "../components/ha-spinner";
import "../components/ha-textfield";
import "../components/map/ha-locations-editor";
import type { HomeAssistant } from "../types";
declare class OnboardingLocation extends LitElement {
    hass: HomeAssistant;
    onboardingLocalize: LocalizeFunc;
    private _working;
    private _location;
    private _places?;
    private _error?;
    private _search;
    private _highlightedMarker?;
    private _elevation?;
    private _unitSystem?;
    private _currency?;
    private _timeZone?;
    private _country?;
    private map;
    protected render(): TemplateResult;
    protected firstUpdated(changedProps: any): void;
    protected updated(changedProps: any): void;
    private _markerLocations;
    private _locationChanged;
    private _markerClicked;
    private _itemClicked;
    private _addressSearch;
    private _searchAddress;
    private _reverseGeocode;
    private _handleButtonClick;
    private _detectLocation;
    private _whoAmI;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "onboarding-location": OnboardingLocation;
    }
}
export {};
