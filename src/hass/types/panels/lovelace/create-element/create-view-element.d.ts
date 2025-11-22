import type { LovelaceViewElement } from "../../../data/lovelace";
import type { LovelaceViewConfig } from "../../../data/lovelace/config/view";
import type { HuiErrorCard } from "../cards/hui-error-card";
import "../views/hui-masonry-view";
export declare const createViewElement: (config: LovelaceViewConfig) => LovelaceViewElement | HuiErrorCard;
