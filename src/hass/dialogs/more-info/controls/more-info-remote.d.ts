import { LitElement, nothing } from "lit";
import "../../../components/ha-attributes";
import type { RemoteEntity } from "../../../data/remote";
import type { HomeAssistant } from "../../../types";
import "../../../components/ha-select";
import "../../../components/ha-list-item";
declare class MoreInfoRemote extends LitElement {
    hass: HomeAssistant;
    stateObj?: RemoteEntity;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _handleActivityChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-remote": MoreInfoRemote;
    }
}
export {};
