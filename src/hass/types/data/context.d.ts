import type { HassConfig } from "home-assistant-js-websocket";
import type { EntityRegistryEntry } from "./entity_registry";
import type { LabelRegistryEntry } from "./label_registry";
export declare const connectionContext: {
    __context__: import("home-assistant-js-websocket").Connection;
};
export declare const statesContext: {
    __context__: import("home-assistant-js-websocket").HassEntities;
};
export declare const entitiesContext: {
    __context__: Record<string, import("./entity_registry").EntityRegistryDisplayEntry>;
};
export declare const devicesContext: {
    __context__: Record<string, import("./device_registry").DeviceRegistryEntry>;
};
export declare const areasContext: {
    __context__: Record<string, import("./area_registry").AreaRegistryEntry>;
};
export declare const localizeContext: {
    __context__: import("../common/translations/localize").LocalizeFunc;
};
export declare const localeContext: {
    __context__: import("./translation").FrontendLocaleData;
};
export declare const configContext: {
    __context__: HassConfig;
};
export declare const themesContext: {
    __context__: import("./ws-themes").Themes;
};
export declare const selectedThemeContext: {
    __context__: import("../types").ThemeSettings;
};
export declare const userContext: {
    __context__: import("../types").CurrentUser;
};
export declare const userDataContext: {
    __context__: import("./frontend").CoreFrontendUserData;
};
export declare const panelsContext: {
    __context__: import("../types").Panels;
};
export declare const fullEntitiesContext: {
    __context__: EntityRegistryEntry[];
};
export declare const floorsContext: {
    __context__: Record<string, import("./floor_registry").FloorRegistryEntry>;
};
export declare const labelsContext: {
    __context__: LabelRegistryEntry[];
};
