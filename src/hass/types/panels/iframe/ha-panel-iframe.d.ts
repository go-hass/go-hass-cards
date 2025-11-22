import { LitElement } from "lit";
import "../../layouts/hass-error-screen";
import "../../layouts/hass-subpage";
import type { HomeAssistant, PanelInfo } from "../../types";
declare class HaPanelIframe extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    panel: PanelInfo<{
        url: string;
    }>;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-iframe": HaPanelIframe;
    }
}
export {};
