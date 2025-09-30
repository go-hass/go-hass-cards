import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "./ha-svg-icon";
export declare class HaIcon extends LitElement {
    icon?: string;
    private _path?;
    private _secondaryPath?;
    private _viewBox?;
    private _legacy;
    willUpdate(changedProps: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _loadIcon;
    private _setCustomPath;
    private _setPath;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-icon": HaIcon;
    }
}
