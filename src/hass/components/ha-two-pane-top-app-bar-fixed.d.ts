import { BaseElement } from "@material/mwc-base/base-element";
import type { MDCTopAppBarAdapter } from "@material/top-app-bar/adapter";
import MDCFixedTopAppBarFoundation from "@material/top-app-bar/fixed/foundation";
export declare const passiveEventOptionsIfSupported: {
    passive: boolean;
};
export declare class TopAppBarBaseBase extends BaseElement {
    protected mdcFoundation: MDCFixedTopAppBarFoundation;
    protected mdcFoundationClass: typeof MDCFixedTopAppBarFoundation;
    protected mdcRoot: HTMLElement;
    protected _actionItemsSlot: HTMLElement;
    protected _scrollTarget: HTMLElement | Window;
    narrow: boolean;
    centerTitle: boolean;
    prominent: boolean;
    dense: boolean;
    pane: boolean;
    footer: boolean;
    private _contentElement;
    private _paneElement?;
    get scrollTarget(): HTMLElement | Window;
    set scrollTarget(value: HTMLElement | Window);
    protected updateRootPosition(): void;
    protected barClasses(): {
        "mdc-top-app-bar--dense": boolean;
        "mdc-top-app-bar--prominent": boolean;
        "center-title": boolean;
        "mdc-top-app-bar--fixed": boolean;
        "mdc-top-app-bar--pane": boolean;
    };
    protected contentClasses(): {
        "mdc-top-app-bar--fixed-adjust": boolean;
        "mdc-top-app-bar--dense-fixed-adjust": boolean;
        "mdc-top-app-bar--prominent-fixed-adjust": boolean;
        "mdc-top-app-bar--dense-prominent-fixed-adjust": boolean;
        "mdc-top-app-bar--pane": boolean;
    };
    protected render(): import("lit-html").TemplateResult<1>;
    protected updated(changedProperties: any): void;
    protected createAdapter(): MDCTopAppBarAdapter;
    protected handleTargetScroll: () => void;
    protected handlePaneScroll: (ev: any) => void;
    protected handleNavigationClick: () => void;
    protected registerListeners(): void;
    protected unregisterListeners(): void;
    protected firstUpdated(): void;
    disconnectedCallback(): void;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-two-pane-top-app-bar-fixed": TopAppBarBaseBase;
    }
}
