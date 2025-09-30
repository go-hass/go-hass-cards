import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-attributes";
import "../../../components/ha-icon-button-group";
import "../../../components/ha-icon-button-toggle";
import type { CoverEntity } from "../../../data/cover";
import "../../../state-control/cover/ha-state-control-cover-buttons";
import "../../../state-control/cover/ha-state-control-cover-position";
import "../../../state-control/cover/ha-state-control-cover-tilt-position";
import "../../../state-control/cover/ha-state-control-cover-toggle";
import type { HomeAssistant } from "../../../types";
import "../components/ha-more-info-state-header";
declare class MoreInfoCover extends LitElement {
    hass: HomeAssistant;
    stateObj?: CoverEntity;
    private _mode?;
    private _setMode;
    protected willUpdate(changedProps: PropertyValues): void;
    private get _stateOverride();
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-cover": MoreInfoCover;
    }
}
export {};
