import ProgressRing from "@home-assistant/webawesome/dist/components/progress-ring/progress-ring";
import type { CSSResultGroup } from "lit";
export declare class HaProgressRing extends ProgressRing {
    size?: "tiny" | "small" | "medium" | "large";
    updated(changedProps: any): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-progress-ring": HaProgressRing;
    }
}
