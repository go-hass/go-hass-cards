import { LitElement } from "lit";
import type { HomeAssistant } from "../../types";
declare class HatLogbookNote extends LitElement {
    hass: HomeAssistant;
    domain: "automation" | "script";
    render(): string;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hat-logbook-note": HatLogbookNote;
    }
}
export {};
