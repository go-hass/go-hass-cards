import { HuiConditionalBase } from "../components/hui-conditional-base";
import type { ConditionalRowConfig, LovelaceRow } from "../entity-rows/types";
declare global {
    interface HASSDomEvents {
        "row-visibility-changed": {
            row: LovelaceRow;
            value: boolean;
        };
    }
}
declare class HuiConditionalRow extends HuiConditionalBase implements LovelaceRow {
    setConfig(config: ConditionalRowConfig): void;
    protected setVisibility(conditionMet: boolean): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-conditional-row": HuiConditionalRow;
    }
}
export {};
