import { HuiConditionalBase } from "../components/hui-conditional-base";
import type { ConditionalRowConfig, LovelaceRow } from "../entity-rows/types";
declare class HuiConditionalRow extends HuiConditionalBase implements LovelaceRow {
    setConfig(config: ConditionalRowConfig): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-conditional-row": HuiConditionalRow;
    }
}
export {};
