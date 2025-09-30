export type { AreaRegistryEntry } from 'home-assistant-frontend/src/data/area_registry';
export type { LovelaceCard } from 'home-assistant-frontend/src/panels/lovelace/types';
export type { LovelaceConfigForm } from 'home-assistant-frontend/src/panels/lovelace/types';
export type { HuiCard } from 'home-assistant-frontend/src/panels/lovelace/cards/hui-card';
export type { LovelaceCardConfig } from 'home-assistant-frontend/src/data/lovelace/config/card';
export type { HomeAssistant } from 'home-assistant-frontend/src/types';
export type { LovelaceLayoutOptions } from "home-assistant-frontend/src/panels/lovelace/types";
import type { CustomCardsWindow } from 'home-assistant-frontend/src/data/lovelace_custom_cards';

declare global {
  interface Window extends CustomCardsWindow {}

  const __DEV_URL__: string;
  const __HA_URL__: string;
}
