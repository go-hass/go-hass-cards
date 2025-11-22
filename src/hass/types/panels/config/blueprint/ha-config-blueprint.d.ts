import type { PropertyValues } from "lit";
import type { Blueprints } from "../../../data/blueprint";
import type { RouterOptions } from "../../../layouts/hass-router-page";
import { HassRouterPage } from "../../../layouts/hass-router-page";
import type { HomeAssistant } from "../../../types";
import "./ha-blueprint-overview";
declare global {
    interface HASSDomEvents {
        "reload-blueprints": undefined;
    }
}
declare class HaConfigBlueprint extends HassRouterPage {
    hass: HomeAssistant;
    narrow: boolean;
    isWide: boolean;
    showAdvanced: boolean;
    blueprints: Record<string, Blueprints>;
    protected routerOptions: RouterOptions;
    private _getBlueprints;
    protected firstUpdated(changedProps: any): void;
    protected updatePageEl(pageEl: any, changedProps: PropertyValues): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-blueprint": HaConfigBlueprint;
    }
}
export {};
