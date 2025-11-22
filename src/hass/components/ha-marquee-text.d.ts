import { type TemplateResult, LitElement, type PropertyValues } from "lit";
export declare class HaMarqueeText extends LitElement {
    speed: number;
    pauseDuration: number;
    pauseOnHover: boolean;
    private _direction;
    private _animationFrame?;
    private _container?;
    private _textSpan?;
    private _position;
    private _maxOffset;
    private _pauseTimeout?;
    protected firstUpdated(changedProps: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    disconnectedCallback(): void;
    protected render(): TemplateResult;
    private _setupAnimation;
    private _animate;
    private _handleMouseEnter;
    private _handleMouseLeave;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-marquee-text": HaMarqueeText;
    }
}
