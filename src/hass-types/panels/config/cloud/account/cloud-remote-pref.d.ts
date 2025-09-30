import { LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-button";
import "../../../../components/ha-card";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-settings-row";
import "../../../../components/ha-switch";
import type { CloudStatusLoggedIn } from "../../../../data/cloud";
import type { HomeAssistant } from "../../../../types";
import "../../../../components/ha-copy-textfield";
export declare class CloudRemotePref extends LitElement {
    hass: HomeAssistant;
    cloudStatus?: CloudStatusLoggedIn;
    narrow: boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _openCertInfo;
    private _toggleChanged;
    private _toggleAllowRemoteEnabledChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-remote-pref": CloudRemotePref;
    }
}
