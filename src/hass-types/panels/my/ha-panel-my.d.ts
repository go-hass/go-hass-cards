import { LitElement, nothing } from "lit";
import "../../layouts/hass-error-screen";
import type { HomeAssistant, Route } from "../../types";
export declare const getMyRedirects: () => Redirects;
export type ParamType = "url" | "string" | "string?";
export type Redirects = Record<string, Redirect>;
export interface Redirect {
    redirect: string;
    navigate_outside_spa?: boolean;
    component?: string;
    params?: Record<string, ParamType>;
    optional_params?: Record<string, ParamType>;
}
declare class HaPanelMy extends LitElement {
    hass: HomeAssistant;
    route: Route;
    _error?: string;
    private _redirect?;
    connectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _createRedirectUrl;
    private _createRedirectParams;
    private _checkParamType;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-my": HaPanelMy;
    }
}
export {};
