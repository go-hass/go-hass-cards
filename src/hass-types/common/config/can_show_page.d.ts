import type { PageNavigation } from "../../layouts/hass-tabs-subpage";
import type { HomeAssistant } from "../../types";
export declare const canShowPage: (hass: HomeAssistant, page: PageNavigation) => boolean;
export declare const isLoadedIntegration: (hass: HomeAssistant, page: PageNavigation) => boolean;
export declare const isNotLoadedIntegration: (hass: HomeAssistant, page: PageNavigation) => boolean;
export declare const isCore: (page: PageNavigation) => boolean;
export declare const isAdvancedPage: (page: PageNavigation) => boolean;
export declare const userWantsAdvanced: (hass: HomeAssistant) => boolean;
export declare const hideAdvancedPage: (hass: HomeAssistant, page: PageNavigation) => boolean;
