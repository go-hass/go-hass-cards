import type { HomeAssistant } from "../../../../../types";
export declare class MatterAddDevice extends HTMLElement {
    hass: HomeAssistant;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "matter-add-device": MatterAddDevice;
    }
}
