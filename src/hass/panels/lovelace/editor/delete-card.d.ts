import type { HomeAssistant } from "../../../types";
import type { Lovelace } from "../types";
import type { LovelaceCardPath } from "./lovelace-path";
export interface DeleteCardParams {
    path: LovelaceCardPath;
    silent: boolean;
}
export declare function performDeleteCard(hass: HomeAssistant, lovelace: Lovelace, params: DeleteCardParams): Promise<void>;
