export type { AreaRegistryEntry } from './hass-types/data/area_registry';
export type { LovelaceCard } from './hass-types/panels/lovelace/types';
export type { LovelaceConfigForm } from './hass-types/panels/lovelace/types';
export type { HuiCard } from './hass-types/panels/lovelace/cards/hui-card';
export type { LovelaceCardConfig } from './hass-types/data/lovelace/config/card';
export type { HomeAssistant } from './hass-types/types';
export type { LovelaceLayoutOptions } from "./hass-types/panels/lovelace/types";
import type { CustomCardsWindow } from './hass-types/data/lovelace_custom_cards';

declare global {
  interface Window extends CustomCardsWindow {}

  const __DEV_URL__: string;
  const __HA_URL__: string;
}
