import type { HuiCard } from "../cards/hui-card";
import type { LovelaceCard, LovelaceHeaderFooter } from "../types";
export declare const computeCardSize: (card: LovelaceCard | LovelaceHeaderFooter | HuiCard) => number | Promise<number>;
