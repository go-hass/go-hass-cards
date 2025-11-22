import { Ripple } from "@material/web/ripple/internal/ripple";
export declare class HaRipple extends Ripple {
    private readonly attachableTouchController;
    attach(control: HTMLElement): void;
    disconnectedCallback(): void;
    detach(): void;
    private _handleTouchEnd;
    private _onTouchControlChange;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-ripple": HaRipple;
    }
}
