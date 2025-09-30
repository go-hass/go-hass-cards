import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-button";
import "../../../../components/ha-spinner";
import "../../../../components/ha-settings-row";
import "../../../../components/ha-switch";
import type { CloudStatusLoggedIn } from "../../../../data/cloud";
import type { HomeAssistant } from "../../../../types";
export declare class CloudWebhooks extends LitElement {
    hass?: HomeAssistant;
    cloudStatus?: CloudStatusLoggedIn;
    narrow: boolean;
    private _cloudHooks?;
    private _localHooks?;
    private _progress;
    connectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    protected updated(changedProps: PropertyValues): void;
    private _showDialog;
    private _handleManageButton;
    private _enableWebhook;
    private _disableWebhook;
    private _fetchData;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-webhooks": CloudWebhooks;
    }
}
