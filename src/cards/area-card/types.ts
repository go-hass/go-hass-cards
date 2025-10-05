import type { LovelaceCardConfig } from "../../types";
import type { SensorType } from "../../utils/sensors";

export type AreaCardConfig = LovelaceCardConfig & {
  area: string;
  aspect_ratio?: string;
  sensor_classes?: SensorType[];
  top_cards: LovelaceCardConfig[];
  side_cards: LovelaceCardConfig[];
}
