import type { HomeAssistant, TranslationDict } from "../types";
import type { Credential } from "./auth";
export declare const SYSTEM_GROUP_ID_ADMIN = "system-admin";
export declare const SYSTEM_GROUP_ID_USER = "system-users";
export declare const SYSTEM_GROUP_ID_READ_ONLY = "system-read-only";
export declare const GROUPS: string[];
export interface User {
    id: string;
    username: string | null;
    name: string;
    is_owner: boolean;
    is_active: boolean;
    local_only: boolean;
    system_generated: boolean;
    group_ids: (keyof TranslationDict["groups"])[];
    credentials: Credential[];
}
export interface UpdateUserParams {
    name?: User["name"];
    is_active?: User["is_active"];
    group_ids?: User["group_ids"];
    local_only?: boolean;
}
export declare const fetchUsers: (hass: HomeAssistant) => Promise<User[]>;
export declare const createUser: (hass: HomeAssistant, name: string, group_ids?: User["group_ids"], local_only?: boolean) => Promise<{
    user: User;
}>;
export declare const updateUser: (hass: HomeAssistant, userId: string, params: UpdateUserParams) => Promise<{
    user: User;
}>;
export declare const deleteUser: (hass: HomeAssistant, userId: string) => Promise<undefined>;
export declare const computeUserInitials: (name: string) => string;
export declare const computeUserBadges: (hass: HomeAssistant, user: User, includeSystem: boolean) => [string, string][];
