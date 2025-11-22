import type { Connection } from "home-assistant-js-websocket";
export interface ThemeVars {
    "primary-color": string;
    "text-primary-color": string;
    "accent-color": string;
    [key: string]: string;
}
export type Theme = ThemeVars & {
    modes?: {
        light?: ThemeVars;
        dark?: ThemeVars;
    };
};
export interface Themes {
    default_theme: string;
    default_dark_theme: string | null;
    themes: Record<string, Theme>;
    darkMode: boolean;
    theme: string;
}
export declare const subscribeThemes: (conn: Connection, onChange: (themes: Themes) => void) => import("home-assistant-js-websocket").UnsubscribeFunc;
