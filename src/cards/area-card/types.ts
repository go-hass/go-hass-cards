import type { LovelaceCardConfig } from '@hass/data/lovelace/config/card';
import type { SensorType } from '@/utils/sensors';

export type AreaCardConfig = LovelaceCardConfig & {
  area: string;
  aspect_ratio?: string;
  navigation_path?: string;
  sensor_classes?: SensorType[];
  top_cards?: LovelaceCardConfig[];
  side_cards?: LovelaceCardConfig[];
  /** @deprecated Use top_cards instead */
  top_card?: LovelaceCardConfig;
  /** @deprecated Use side_cards instead */
  side_card?: LovelaceCardConfig;
  sensor_entities?: {
    temperature?: AreaCardConfigSensorEntity;
    humidity?: AreaCardConfigSensorEntity;
    power?: AreaCardConfigSensorEntity;
    motion?: AreaCardConfigSensorEntity;
    presence?: AreaCardConfigSensorEntity;
    occupancy?: AreaCardConfigSensorEntity;
  };
};

export type AreaCardConfigSensorEntity = {
  entities: string[];
  exclude: boolean;
};
