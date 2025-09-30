import Tooltip from "@home-assistant/webawesome/dist/components/tooltip/tooltip";
import type { CSSResultGroup } from "lit";
export declare class HaTooltip extends Tooltip {
    /** The amount of time to wait before showing the tooltip when the user mouses in. */
    showDelay: number;
    /** The amount of time to wait before hiding the tooltip when the user mouses out.. */
    hideDelay: number;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tooltip": HaTooltip;
    }
}
