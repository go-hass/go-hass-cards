import { LitElement } from "lit";
/**
 * Home Assistant dialog footer component
 *
 * @element ha-dialog-footer
 * @extends {LitElement}
 *
 * @summary
 * A simple footer container for dialog actions,
 * typically used as the `footer` slot in `ha-wa-dialog`.
 *
 * @slot primaryAction - Primary action button(s), aligned to the end.
 * @slot secondaryAction - Secondary action button(s), placed before the primary action.
 *
 * @remarks
 * **Button Styling Guidance:**
 * - `primaryAction` slot: Use `variant="accent"`
 * - `secondaryAction` slot: Use `variant="plain"`
 */
export declare class HaDialogFooter extends LitElement {
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-footer": HaDialogFooter;
    }
}
