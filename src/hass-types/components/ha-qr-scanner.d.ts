import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-alert";
import "./ha-button";
import "./ha-button-menu";
import "./ha-list-item";
import "./ha-spinner";
import "./ha-textfield";
declare class HaQrScanner extends LitElement {
    hass: HomeAssistant;
    description?: string;
    alternativeOptionLabel?: string;
    validate?: (value: string) => string | undefined;
    private _cameras?;
    private _loading;
    private _error?;
    private _warning?;
    private _qrScanner?;
    private _qrNotFoundCount;
    private _removeListener?;
    private _video?;
    private _canvasContainer?;
    private _manualInput?;
    disconnectedCallback(): void;
    connectedCallback(): void;
    protected firstUpdated(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private get _nativeBarcodeScanner();
    private _loadQrScanner;
    private _listCameras;
    private _qrCodeError;
    private _qrCodeScanned;
    private _manualKeyup;
    private _manualPaste;
    private _manualSubmit;
    private _cameraChanged;
    private _openExternalScanner;
    private _closeExternalScanner;
    private _notifyExternalScanner;
    private _reportError;
    private _reportWarning;
    private _retry;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HASSDomEvents {
        "qr-code-scanned": {
            value: string;
        };
        "qr-code-closed": undefined;
        "qr-code-more-options": undefined;
    }
    interface HTMLElementTagNameMap {
        "ha-qr-scanner": HaQrScanner;
    }
}
export {};
