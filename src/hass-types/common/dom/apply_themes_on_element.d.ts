import type { HomeAssistant } from "../../types";
/**
 * Apply a theme to an element by setting the CSS variables on it.
 *
 * element: Element to apply theme on.
 * themes: HASS theme information (e.g. active dark mode and globally active theme name).
 * selectedTheme: Selected theme (used to override the globally active theme for this element).
 * themeSettings: Additional settings such as selected colors.
 */
export declare const applyThemesOnElement: (element: any, themes: HomeAssistant["themes"], selectedTheme?: string, themeSettings?: Partial<HomeAssistant["selectedTheme"]>, main?: boolean) => void;
export declare const invalidateThemeCache: () => void;
