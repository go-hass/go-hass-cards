import type { CSSResultGroup } from "lit";
import { HuiStackCard } from "./hui-stack-card";
export declare class HuiHorizontalStackCard extends HuiStackCard {
    getCardSize(): Promise<number>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-horizontal-stack-card": HuiHorizontalStackCard;
    }
}
