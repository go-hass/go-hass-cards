import { SwitchBase } from "@material/mwc-switch/deprecated/mwc-switch-base";
export declare class HaSwitch extends SwitchBase {
    haptic: boolean;
    protected firstUpdated(): void;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-switch": HaSwitch;
    }
}
