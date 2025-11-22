import type { RouterOptions } from "../../../layouts/hass-router-page";
import { HassRouterPage } from "../../../layouts/hass-router-page";
import type { HomeAssistant } from "../../../types";
export declare const lovelaceTabs: {
    path: string;
    translationKey: string;
    iconPath: string;
}[];
export declare const lovelaceResourcesTabs: {
    path: string;
    translationKey: string;
    iconPath: string;
}[];
declare class HaConfigLovelace extends HassRouterPage {
    hass: HomeAssistant;
    narrow: boolean;
    isWide: boolean;
    protected routerOptions: RouterOptions;
    protected updatePageEl(pageEl: any): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-lovelace": HaConfigLovelace;
    }
}
export {};
