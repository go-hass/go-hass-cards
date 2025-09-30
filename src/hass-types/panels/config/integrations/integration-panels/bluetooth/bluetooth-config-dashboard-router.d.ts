import type { RouterOptions } from "../../../../../layouts/hass-router-page";
import { HassRouterPage } from "../../../../../layouts/hass-router-page";
import type { HomeAssistant } from "../../../../../types";
declare class BluetoothConfigDashboardRouter extends HassRouterPage {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    private _configEntry;
    protected routerOptions: RouterOptions;
    protected updatePageEl(el: any): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "bluetooth-config-dashboard-router": BluetoothConfigDashboardRouter;
    }
}
export {};
