import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-icon";
import "./ha-icon-button";
import type { HaIconButton } from "./ha-icon-button";
import "./ha-icon-button-group";
import "./ha-tooltip";
export interface HaIconButtonToolbarItem {
    [key: string]: any;
    path: string;
    label: string;
    id?: string;
    disabled?: boolean;
    tooltip?: string;
    action?: (e: Event) => any;
}
export declare class HaIconButtonToolbar extends LitElement {
    items: (HaIconButtonToolbarItem | string)[];
    private _buttons?;
    findToolbarButtons(selector?: string): HaIconButton[] | undefined;
    findToolbarButtonById(id: any): HaIconButton | undefined;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-icon-button-toolbar": HaIconButtonToolbar;
    }
}
