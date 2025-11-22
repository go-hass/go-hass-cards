export type { HomeAssistant } from '@hass/types/types';
export type { AreaRegistryEntry } from '@hass/types/data/area_registry';
export type {
  LovelaceCard,
  LovelaceConfigForm,
  LovelaceLayoutOptions,
  LovelaceCardEditor,
} from '@hass/types/panels/lovelace/types';
export type { HuiCard } from '@hass/types/panels/lovelace/cards/hui-card';
export type { LovelaceCardConfig } from '@hass/types/data/lovelace/config/card';
import type { CustomCardsWindow } from '@hass/types/data/lovelace_custom_cards';
export type { HuiStackCard } from '@hass/types/panels/lovelace/cards/hui-stack-card';
export type { LovelaceConfig } from '@hass/types/data/lovelace/config/types';
export type { HASSDomEvent } from '@hass/types/common/dom/fire_event';
export type { ConfigChangedEvent } from '@hass/types/panels/lovelace/editor/hui-element-editor';
export type { StackCardConfig } from '@hass/types/panels/lovelace/cards/types';
export type { SelectSelector } from '@hass/types/data/selector';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Window extends CustomCardsWindow {}

  const __DEV_URL__: string;
  const isDev: string;
}
