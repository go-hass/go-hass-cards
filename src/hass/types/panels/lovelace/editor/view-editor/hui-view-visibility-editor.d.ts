import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/user/ha-user-badge";
import "../../../../components/ha-list-item";
import "../../../../components/ha-switch";
import type { LovelaceViewConfig, ShowViewConfig } from "../../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../../types";
declare global {
    interface HASSDomEvents {
        "view-visibility-changed": {
            visible: ShowViewConfig[];
        };
    }
}
export declare class HuiViewVisibilityEditor extends LitElement {
    set config(config: LovelaceViewConfig);
    hass: HomeAssistant;
    private _config;
    private _users;
    private _visible;
    private _sortedUsers;
    protected firstUpdated(changedProps: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected checkUser(userId: string): boolean;
    private _valChange;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-view-visibility-editor": HuiViewVisibilityEditor;
    }
}
