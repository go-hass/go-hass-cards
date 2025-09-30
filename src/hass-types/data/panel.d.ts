import type { HomeAssistant, PanelInfo } from "../types";
/** Panel to show when no panel is picked. */
export declare const DEFAULT_PANEL = "lovelace";
export declare const getStorageDefaultPanelUrlPath: () => string;
export declare const setDefaultPanel: (element: HTMLElement, urlPath: string) => void;
export declare const getDefaultPanel: (hass: HomeAssistant) => PanelInfo;
export declare const getPanelNameTranslationKey: (panel: PanelInfo) => `panel.${string}`;
export declare const getPanelTitle: (hass: HomeAssistant, panel: PanelInfo) => string | undefined;
export declare const getPanelTitleFromUrlPath: (hass: HomeAssistant, urlPath: string) => string | undefined;
export declare const getPanelIcon: (panel: PanelInfo) => string | null;
