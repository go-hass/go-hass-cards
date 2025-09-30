import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import type { NetworkConfig } from "../data/network";
import type { HomeAssistant } from "../types";
import "./ha-checkbox";
import "./ha-settings-row";
import "./ha-svg-icon";
declare global {
    interface HASSDomEvents {
        "network-config-changed": {
            configured_adapters: string[];
        };
    }
}
export declare class HaNetwork extends LitElement {
    hass: HomeAssistant;
    networkConfig?: NetworkConfig;
    private _expanded?;
    protected render(): TemplateResult<1> | typeof nothing;
    private _handleAutoConfigureCheckboxClick;
    private _handleAdapterCheckboxClick;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-network": HaNetwork;
    }
}
