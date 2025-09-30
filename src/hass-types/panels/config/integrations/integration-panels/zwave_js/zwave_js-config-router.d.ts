import type { RouterOptions } from "../../../../../layouts/hass-router-page";
import { HassRouterPage } from "../../../../../layouts/hass-router-page";
import type { HomeAssistant } from "../../../../../types";
import type { PageNavigation } from "../../../../../layouts/hass-tabs-subpage";
export declare const configTabs: PageNavigation[];
declare class ZWaveJSConfigRouter extends HassRouterPage {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    private _configEntry;
    protected routerOptions: RouterOptions;
    protected updatePageEl(el: any): void;
    private _fetchConfigEntries;
}
declare global {
    interface HTMLElementTagNameMap {
        "zwave_js-config-router": ZWaveJSConfigRouter;
    }
}
export {};
