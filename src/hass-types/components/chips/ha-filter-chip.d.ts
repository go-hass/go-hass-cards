import { FilterChip } from "@material/web/chips/internal/filter-chip";
export declare class HaFilterChip extends FilterChip {
    noLeadingIcon: boolean;
    static styles: import("lit").CSSResult[];
    protected renderLeadingIcon(): import("lit-html").TemplateResult<2 | 1 | 3>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-chip": HaFilterChip;
    }
}
