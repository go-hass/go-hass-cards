import type { HomeAssistant } from '@hass/types';
import type { AreaCardConfig } from './types';

const baseCardName = 'go-area-card';
export const areaCardName = customElements.get(baseCardName) ? `${baseCardName}-dev` : baseCardName;

const baseEditorCardName = `${baseCardName}-editor`;
export const editorCardName = customElements.get(baseEditorCardName) ? `${baseEditorCardName}-dev` : baseEditorCardName;

export function getDefaultAreaCardConfig(hass: HomeAssistant): AreaCardConfig {
  return {
    type: `custom:${areaCardName}`,
    area: Object.values(hass.areas)[0]?.area_id || '',
    aspect_ratio: '16:9',
    navigation_path: undefined,
    sensor_classes: ['temperature', 'humidity', 'power'],
    top_cards: [],
    side_cards: [],
  };
}

export function resolveConfigWithDeprecations({ top_card, side_card, ...config }: AreaCardConfig): AreaCardConfig {
  return {
    ...config,
    // This function is used in the Editor so as soon as the user makes any config change we'll reset the configuration
    // to use `top_cards` & `side_cards`, so users won't have both deprecated and new options set at the same time.
    top_cards: config.top_cards?.length ? config.top_cards : top_card ? [top_card] : [],
    side_cards: config.side_cards?.length ? config.side_cards : side_card ? [side_card] : [],
  };
}
