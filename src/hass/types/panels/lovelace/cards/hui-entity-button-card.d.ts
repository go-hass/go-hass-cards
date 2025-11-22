import { HuiButtonCard } from "./hui-button-card";
declare class HuiEntityButtonCard extends HuiButtonCard {
    setConfig(config: any): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-entity-button-card": HuiEntityButtonCard;
    }
}
export {};
