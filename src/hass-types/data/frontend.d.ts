import type { Connection } from "home-assistant-js-websocket";
export interface CoreFrontendUserData {
    showAdvanced?: boolean;
    showEntityIdPicker?: boolean;
}
export interface SidebarFrontendUserData {
    panelOrder: string[];
    hiddenPanels: string[];
}
declare global {
    interface FrontendUserData {
        core: CoreFrontendUserData;
        sidebar: SidebarFrontendUserData;
    }
}
export type ValidUserDataKey = keyof FrontendUserData;
export declare const fetchFrontendUserData: <UserDataKey extends ValidUserDataKey>(conn: Connection, key: UserDataKey) => Promise<FrontendUserData[UserDataKey] | null>;
export declare const saveFrontendUserData: <UserDataKey extends ValidUserDataKey>(conn: Connection, key: UserDataKey, value: FrontendUserData[UserDataKey]) => Promise<void>;
export declare const subscribeFrontendUserData: <UserDataKey extends ValidUserDataKey>(conn: Connection, userDataKey: UserDataKey, onChange: (data: {
    value: FrontendUserData[UserDataKey] | null;
}) => void) => Promise<() => Promise<void>>;
