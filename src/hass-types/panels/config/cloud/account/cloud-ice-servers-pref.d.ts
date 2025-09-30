import { LitElement, nothing } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-switch";
import type { CloudStatusLoggedIn } from "../../../../data/cloud";
import type { HomeAssistant } from "../../../../types";
export declare class CloudICEServersPref extends LitElement {
    hass: HomeAssistant;
    cloudStatus?: CloudStatusLoggedIn;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _toggleCloudICEServersEnabledChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-ice-servers-pref": CloudICEServersPref;
    }
}
