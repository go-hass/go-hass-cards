import { SelectBase } from "@material/mwc-select/mwc-select-base";
import type { PropertyValues } from "lit";
import "./ha-icon";
import "./ha-ripple";
import "./ha-svg-icon";
import "./ha-menu";
export declare class HaControlSelectMenu extends SelectBase {
    protected mdcRoot: HTMLElement;
    protected anchorElement: HTMLDivElement | null;
    showArrow: boolean;
    hideLabel: boolean;
    options: any;
    protected updated(changedProps: PropertyValues): void;
    render(): import("lit-html").TemplateResult<1>;
    protected renderMenu(): import("lit-html").TemplateResult<1>;
    private _renderArrow;
    private _renderIcon;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _translationsUpdated;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-control-select-menu": HaControlSelectMenu;
    }
}
