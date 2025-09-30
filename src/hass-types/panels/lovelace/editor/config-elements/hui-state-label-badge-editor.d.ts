import "../../../../components/ha-form/ha-form";
import type { StateLabelBadgeConfig } from "../../badges/types";
import "../hui-sub-element-editor";
import "./hui-card-features-editor";
import { HuiEntityBadgeEditor } from "./hui-entity-badge-editor";
export declare class HuiStateLabelBadgeEditor extends HuiEntityBadgeEditor {
    setConfig(config: StateLabelBadgeConfig): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-state-label-badge-editor": HuiStateLabelBadgeEditor;
    }
}
