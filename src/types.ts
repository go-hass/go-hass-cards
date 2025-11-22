import type { CustomCardsWindow } from '@hass/data/lovelace_custom_cards';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Window extends CustomCardsWindow {}

  const __DEV_URL__: string;
  const isDev: string;
}
