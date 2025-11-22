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
    sensor_classes: ['temperature', 'humidity', 'power'],
    top_cards: [],
    side_cards: [],
  };
}

export function resolveConfigWithDeprecations(config: AreaCardConfig): AreaCardConfig {
  return {
    ...config,
    top_cards: [...(config.top_cards ?? []), ...(config.top_card ? [config.top_card] : [])],
    side_cards: [...(config.side_cards ?? []), ...(config.side_card ? [config.side_card] : [])],
  };
}
