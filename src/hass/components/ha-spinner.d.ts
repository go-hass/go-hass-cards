import Spinner from "@home-assistant/webawesome/dist/components/spinner/spinner";
import type { CSSResultGroup, PropertyValues } from "lit";
export declare class HaSpinner extends Spinner {
    size?: "tiny" | "small" | "medium" | "large";
    protected updated(changedProps: PropertyValues): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-spinner": HaSpinner;
    }
}
