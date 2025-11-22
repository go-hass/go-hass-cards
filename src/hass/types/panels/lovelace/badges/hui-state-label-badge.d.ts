import "../../../components/entity/ha-state-label-badge";
import type { HuiStateLabelBadgeEditor } from "../editor/config-elements/hui-state-label-badge-editor";
import { HuiEntityBadge } from "./hui-entity-badge";
import type { StateLabelBadgeConfig } from "./types";
export declare class HuiStateLabelBadge extends HuiEntityBadge {
    static getConfigElement(): Promise<HuiStateLabelBadgeEditor>;
    setConfig(config: StateLabelBadgeConfig): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-state-label-badge": HuiStateLabelBadge;
    }
}
