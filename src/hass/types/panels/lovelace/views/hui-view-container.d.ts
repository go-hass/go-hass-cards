import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { LovelaceViewConfig } from "../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../types";
type BackgroundConfig = LovelaceViewConfig["background"];
declare class HuiViewContainer extends LitElement {
    hass?: HomeAssistant;
    background?: BackgroundConfig;
    theme?: LovelaceViewConfig["theme"];
    themeBackground?: string;
    private _unsubMediaQuery?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _clearmediaQuery;
    private _setUpMediaQuery;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    render(): import("lit-html").TemplateResult<1>;
    private _applyTheme;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-view-container": HuiViewContainer;
    }
}
export {};
