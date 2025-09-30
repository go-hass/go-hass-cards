import type { CSSResultGroup } from "lit";
import { HuiStackCard } from "./hui-stack-card";
declare class HuiVerticalStackCard extends HuiStackCard {
    getCardSize(): Promise<number>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-vertical-stack-card": HuiVerticalStackCard;
    }
}
export {};
