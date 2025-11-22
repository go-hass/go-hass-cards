import type { PropertyValues } from "lit";
import type { SceneEntity } from "../../../data/scene";
import type { RouterOptions } from "../../../layouts/hass-router-page";
import { HassRouterPage } from "../../../layouts/hass-router-page";
import type { HomeAssistant } from "../../../types";
import "./ha-scene-dashboard";
import "./ha-scene-editor";
declare class HaConfigScene extends HassRouterPage {
    hass: HomeAssistant;
    narrow: boolean;
    isWide: boolean;
    scenes: SceneEntity[];
    protected routerOptions: RouterOptions;
    private _debouncedUpdateScenes;
    private _getScenes;
    protected updatePageEl(pageEl: any, changedProps: PropertyValues): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-scene": HaConfigScene;
    }
}
export {};
