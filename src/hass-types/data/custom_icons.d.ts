export interface CustomIcon {
    path: string;
    secondaryPath?: string;
    viewBox?: string;
}
export interface CustomIconListItem {
    name: string;
    keywords?: string[];
}
export interface CustomIconHelpers {
    getIcon: (name: string) => Promise<CustomIcon>;
    getIconList?: () => Promise<CustomIconListItem[]>;
}
export interface CustomIconsWindow {
    customIcons?: Record<string, CustomIconHelpers>;
}
export declare const customIcons: Record<string, CustomIconHelpers>;
