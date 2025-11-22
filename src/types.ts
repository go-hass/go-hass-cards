export type { AreaRegistryEntry } from './hass-types/data/area_registry';
export type { LovelaceCard, LovelaceConfigForm, LovelaceLayoutOptions, LovelaceCardEditor } from './hass-types/panels/lovelace/types';
export type { HuiCard } from './hass-types/panels/lovelace/cards/hui-card';
export type { LovelaceCardConfig } from './hass-types/data/lovelace/config/card';
import type { CustomCardsWindow } from './hass-types/data/lovelace_custom_cards';
export type { HomeAssistant } from './hass-types/types';

declare global {
  interface Window extends CustomCardsWindow {}

  const __DEV_URL__: string;
  const isDev: string;
}
