import type { HaFormSchema } from "../components/ha-form/types";
import type { HomeAssistant } from "../types";
import type { RefreshTokenType } from "./refresh_token";
export interface AuthUrlSearchParams {
    client_id?: string;
    redirect_uri?: string;
    state?: string;
}
export interface AuthProvider {
    name: string;
    id: string;
    type: string;
    users?: Record<string, string>;
}
export interface Credential {
    type: string;
}
export interface SignedPath {
    path: string;
}
export declare const hassUrl: string;
export declare const autocompleteLoginFields: (schema: HaFormSchema[]) => (import("../components/ha-form/types").HaFormConstantSchema | import("../components/ha-form/types").HaFormStringSchema | import("../components/ha-form/types").HaFormIntegerSchema | import("../components/ha-form/types").HaFormFloatSchema | import("../components/ha-form/types").HaFormBooleanSchema | import("../components/ha-form/types").HaFormSelectSchema | import("../components/ha-form/types").HaFormMultiSelectSchema | import("../components/ha-form/types").HaFormTimeSchema | import("../components/ha-form/types").HaFormGridSchema | import("../components/ha-form/types").HaFormExpandableSchema | import("../components/ha-form/types").HaFormOptionalActionsSchema)[];
export declare const getSignedPath: (hass: HomeAssistant, path: string) => Promise<SignedPath>;
export declare const fetchAuthProviders: () => Promise<Response>;
export declare const createLoginFlow: (client_id: string | undefined, redirect_uri: string | undefined, handler: (string | null)[]) => Promise<Response>;
export declare const submitLoginFlow: (flow_id: string, data: Record<string, any>) => Promise<Response>;
export declare const deleteLoginFlow: (flow_id: any) => Promise<Response>;
export declare const redirectWithAuthCode: (url: string, authCode: string, oauth2State: string | undefined, storeToken: boolean) => void;
export declare const createAuthForUser: (hass: HomeAssistant, userId: string, username: string, password: string) => Promise<unknown>;
export declare const changePassword: (hass: HomeAssistant, current_password: string, new_password: string) => Promise<unknown>;
export declare const adminChangePassword: (hass: HomeAssistant, userId: string, password: string) => Promise<undefined>;
export declare const adminChangeUsername: (hass: HomeAssistant, userId: string, username: string) => Promise<undefined>;
export declare const deleteAllRefreshTokens: (hass: HomeAssistant, token_type?: RefreshTokenType, delete_current_token?: boolean) => Promise<unknown>;
