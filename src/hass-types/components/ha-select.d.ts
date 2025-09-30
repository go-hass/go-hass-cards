import { SelectBase } from "@material/mwc-select/mwc-select-base";
import { nothing } from "lit";
import "./ha-icon-button";
import "./ha-menu";
export declare class HaSelect extends SelectBase {
    icon: boolean;
    clearable: boolean;
    inlineArrow: boolean;
    options: any;
    protected render(): import("lit-html").TemplateResult<1>;
    protected renderMenu(): import("lit-html").TemplateResult<1>;
    protected renderLeadingIcon(): import("lit-html").TemplateResult<1> | typeof nothing;
    connectedCallback(): void;
    protected firstUpdated(): Promise<void>;
    protected updated(changedProperties: any): void;
    disconnectedCallback(): void;
    private _clearValue;
    private _translationsUpdated;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-select": HaSelect;
    }
}
