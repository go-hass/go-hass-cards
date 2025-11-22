import Slider from "@home-assistant/webawesome/dist/components/slider/slider";
import { type CSSResultGroup } from "lit";
export declare class HaSlider extends Slider {
    size: "small" | "medium";
    withTooltip: boolean;
    connectedCallback(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-slider": HaSlider;
    }
}
