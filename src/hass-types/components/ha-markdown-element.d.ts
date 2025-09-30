import type { PropertyValues } from "lit";
import { ReactiveElement } from "lit";
declare class HaMarkdownElement extends ReactiveElement {
    content?: any;
    allowSvg: boolean;
    allowDataUrl: boolean;
    breaks: boolean;
    lazyImages: boolean;
    cache: boolean;
    disconnectedCallback(): void;
    protected createRenderRoot(): this;
    protected update(changedProps: any): void;
    protected willUpdate(_changedProperties: PropertyValues): void;
    private _computeCacheKey;
    private _render;
    private _resize;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-markdown-element": HaMarkdownElement;
    }
}
export {};
