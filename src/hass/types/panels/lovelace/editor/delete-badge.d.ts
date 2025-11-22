import type { HomeAssistant } from "../../../types";
import type { Lovelace } from "../types";
import type { LovelaceCardPath } from "./lovelace-path";
export interface DeleteBadgeParams {
    path: LovelaceCardPath;
    silent: boolean;
}
export declare function performDeleteBadge(hass: HomeAssistant, lovelace: Lovelace, params: DeleteBadgeParams): Promise<void>;
