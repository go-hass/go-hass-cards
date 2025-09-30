import { LitElement, nothing } from "lit";
import "../../../components/ha-camera-stream";
import type { ImageEntity } from "../../../data/image";
import type { HomeAssistant } from "../../../types";
declare class MoreInfoImage extends LitElement {
    hass?: HomeAssistant;
    stateObj?: ImageEntity;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-image": MoreInfoImage;
    }
}
export {};
