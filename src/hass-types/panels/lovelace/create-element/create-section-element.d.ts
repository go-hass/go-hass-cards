import type { LovelaceSectionElement } from "../../../data/lovelace";
import type { LovelaceSectionConfig } from "../../../data/lovelace/config/section";
import type { HuiErrorCard } from "../cards/hui-error-card";
import "../sections/hui-grid-section";
export declare const createSectionElement: (config: LovelaceSectionConfig) => LovelaceSectionElement | HuiErrorCard;
