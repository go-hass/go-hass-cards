import { LitElement, type PropertyValues } from "lit";
export declare class HaAspectRatio extends LitElement {
    aspectRatio?: string;
    private _ratio;
    willUpdate(changedProps: PropertyValues): void;
    protected render(): unknown;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-aspect-ratio": HaAspectRatio;
    }
}
