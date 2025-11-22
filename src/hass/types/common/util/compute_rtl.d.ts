import type { LitElement } from "lit";
import type { HomeAssistant } from "../../types";
export declare function computeRTL(hass: HomeAssistant): boolean;
export declare function computeRTLDirection(hass: HomeAssistant): "ltr" | "rtl";
export declare function emitRTLDirection(rtl: boolean): "ltr" | "rtl";
export declare function computeDirectionStyles(isRTL: boolean, element: LitElement): void;
export declare function setDirectionStyles(direction: string, element: LitElement): void;
