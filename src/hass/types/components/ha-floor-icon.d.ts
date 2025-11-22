import { LitElement } from "lit";
import type { FloorRegistryEntry } from "../data/floor_registry";
import "./ha-icon";
import "./ha-svg-icon";
export declare const floorDefaultIconPath: (floor: Pick<FloorRegistryEntry, "level">) => string;
export declare const floorDefaultIcon: (floor: Pick<FloorRegistryEntry, "level">) => "mdi:home-floor-0" | "mdi:home-floor-1" | "mdi:home-floor-2" | "mdi:home-floor-3" | "mdi:home-floor-negative-1" | "mdi:home";
export declare class HaFloorIcon extends LitElement {
    floor: Pick<FloorRegistryEntry, "icon" | "level">;
    icon?: string;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-floor-icon": HaFloorIcon;
    }
}
