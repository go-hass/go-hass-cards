import { LitElement, nothing } from "lit";
import "../../../../../components/ha-dialog-header";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-icon-button-arrow-prev";
import "../../../../../components/ha-button";
import "../../../../../components/ha-dialog";
import type { HomeAssistant } from "../../../../../types";
import "./matter-add-device/matter-add-device-apple-home";
import "./matter-add-device/matter-add-device-existing";
import "./matter-add-device/matter-add-device-generic";
import "./matter-add-device/matter-add-device-google-home";
import "./matter-add-device/matter-add-device-google-home-fallback";
import "./matter-add-device/matter-add-device-main";
import "./matter-add-device/matter-add-device-new";
import "./matter-add-device/matter-add-device-commissioning";
export type MatterAddDeviceStep = "main" | "new" | "existing" | "google_home" | "google_home_fallback" | "apple_home" | "generic" | "commissioning";
declare global {
    interface HASSDomEvents {
        "step-selected": {
            step: MatterAddDeviceStep;
        };
        "pairing-code-changed": {
            code: string;
        };
    }
}
declare class DialogMatterAddDevice extends LitElement {
    hass: HomeAssistant;
    private _open;
    _pairingCode: string;
    _step: MatterAddDeviceStep;
    private _unsub?;
    showDialog(): void;
    closeDialog(): void;
    private _handleStepSelected;
    private _handlePairingCodeChanged;
    private _back;
    private _renderStep;
    private _addDevice;
    private _renderActions;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-matter-add-device": DialogMatterAddDevice;
    }
}
export {};
