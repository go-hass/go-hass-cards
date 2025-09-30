import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-attributes";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import "../../../components/ha-outlined-icon-button";
import "../../../components/ha-state-icon";
import type { LockEntity } from "../../../data/lock";
import "../../../state-control/lock/ha-state-control-lock-toggle";
import type { HomeAssistant } from "../../../types";
import "../components/ha-more-info-state-header";
type ButtonState = "normal" | "confirm" | "done";
declare class MoreInfoLock extends LitElement {
    hass: HomeAssistant;
    stateObj?: LockEntity;
    _buttonState: ButtonState;
    private _buttonTimeout?;
    private _setButtonState;
    private _open;
    private _resetButtonState;
    disconnectedCallback(): void;
    private _lock;
    private _unlock;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-lock": MoreInfoLock;
    }
}
export {};
