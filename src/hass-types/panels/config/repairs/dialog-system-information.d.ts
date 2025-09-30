import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-card";
import "../../../components/ha-metric";
import "../../../components/ha-spinner";
import type { HomeAssistant } from "../../../types";
export declare const UNSUPPORTED_REASON_URL: {};
export declare const UNHEALTHY_REASON_URL: {
    privileged: string;
};
declare class DialogSystemInformation extends LitElement {
    hass: HomeAssistant;
    private _systemInfo?;
    private _resolutionInfo?;
    private _supervisorStats?;
    private _coreStats?;
    private _opened;
    private _systemHealthSubscription?;
    private _hassIOSubscription?;
    showDialog(): void;
    closeDialog(): void;
    private _subscribe;
    private _unsubscribe;
    protected render(): TemplateResult<1> | typeof nothing;
    private _unsupportedDialog;
    private _unhealthyDialog;
    private _getSections;
    private _copyInfo;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-system-information": DialogSystemInformation;
    }
}
export {};
