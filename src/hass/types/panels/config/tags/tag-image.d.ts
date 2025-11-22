import { LitElement, nothing } from "lit";
import "../../../components/ha-svg-icon";
import type { TagRowData } from "./ha-config-tags";
export declare class HaTagImage extends LitElement {
    tag?: TagRowData;
    private _timeout?;
    protected updated(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "tag-image": HaTagImage;
    }
}
