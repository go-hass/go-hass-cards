/**
 * Broadcast haptic feedback requests
 */
import type { HASSDomEvent } from "../common/dom/fire_event";
export type HapticType = "success" | "warning" | "failure" | "light" | "medium" | "heavy" | "selection";
declare global {
    interface HASSDomEvents {
        haptic: HapticType;
    }
    interface GlobalEventHandlersEventMap {
        haptic: HASSDomEvent<HapticType>;
    }
}
export declare const forwardHaptic: (node: HTMLElement, hapticType: HapticType) => void;
