import { AssistChip } from "@material/web/chips/internal/assist-chip";
export declare class HaAssistChip extends AssistChip {
    filled: boolean;
    active: boolean;
    static styles: import("lit").CSSResult[];
    protected renderOutline(): import("lit-html").TemplateResult<1>;
    protected getContainerClasses(): {
        active: boolean;
        disabled: boolean;
        elevated: boolean;
        link: boolean;
    };
    protected renderPrimaryContent(): import("lit-html").TemplateResult<1>;
    protected renderTrailingIcon(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-assist-chip": HaAssistChip;
    }
}
