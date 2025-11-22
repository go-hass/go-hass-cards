import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-card";
import type { ZHADevice } from "../../../../../data/zha";
import type { HomeAssistant } from "../../../../../types";
import "./zha-device-card";
declare class ZHADevicePairingStatusCard extends LitElement {
    hass: HomeAssistant;
    device?: ZHADevice;
    narrow: boolean;
    private _showHelp;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-device-pairing-status-card": ZHADevicePairingStatusCard;
    }
}
export {};
