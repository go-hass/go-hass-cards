import { FabBase } from "@material/mwc-fab/mwc-fab-base";
export declare class HaFab extends FabBase {
    protected firstUpdated(changedProperties: any): void;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-fab": HaFab;
    }
}
