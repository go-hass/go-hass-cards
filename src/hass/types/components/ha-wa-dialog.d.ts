import "@home-assistant/webawesome/dist/components/dialog/dialog";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-dialog-header";
import "./ha-icon-button";
export type DialogWidth = "small" | "medium" | "large" | "full";
/**
 * Home Assistant dialog component
 *
 * @element ha-wa-dialog
 * @extends {LitElement}
 *
 * @summary
 * A stylable dialog built using the `wa-dialog` component, providing a standardized header (ha-dialog-header),
 * body, and footer (preferably using `ha-dialog-footer`) with slots
 *
 * You can open and close the dialog declaratively by using the `data-dialog="close"` attribute.
 * @see https://webawesome.com/docs/components/dialog/#opening-and-closing-dialogs-declaratively
 *
 * @slot header - Replace the entire header area.
 * @slot headerNavigationIcon - Leading header action (e.g. close/back button).
 * @slot headerActionItems - Trailing header actions (e.g. buttons, menus).
 * @slot - Dialog content body.
 * @slot footer - Dialog footer content.
 *
 * @csspart dialog - The dialog surface.
 * @csspart header - The header container.
 * @csspart body - The scrollable body container.
 * @csspart footer - The footer container.
 *
 * @cssprop --dialog-content-padding - Padding for the dialog content sections.
 * @cssprop --ha-dialog-show-duration - Show animation duration.
 * @cssprop --ha-dialog-hide-duration - Hide animation duration.
 * @cssprop --ha-dialog-surface-background - Dialog background color.
 * @cssprop --ha-dialog-border-radius - Border radius of the dialog surface.
 * @cssprop --dialog-z-index - Z-index for the dialog.
 * @cssprop --dialog-surface-position - CSS position of the dialog surface.
 * @cssprop --dialog-surface-margin-top - Top margin for the dialog surface.
 *
 * @attr {boolean} open - Controls the dialog open state.
 * @attr {("small"|"medium"|"large"|"full")} width - Preferred dialog width preset. Defaults to "medium".
 * @attr {boolean} prevent-scrim-close - Prevents closing the dialog by clicking the scrim/overlay. Defaults to false.
 * @attr {string} header-title - Header title text when no custom title slot is provided.
 * @attr {string} header-subtitle - Header subtitle text when no custom subtitle slot is provided.
 * @attr {("above"|"below")} header-subtitle-position - Position of the subtitle relative to the title. Defaults to "below".
 * @attr {boolean} flexcontent - Makes the dialog body a flex container for flexible layouts.
 *
 * @event opened - Fired when the dialog is shown.
 * @event closed - Fired after the dialog is hidden.
 *
 * @remarks
 * **Focus Management:**
 * To automatically focus an element when the dialog opens, add the `autofocus` attribute to it.
 * Components with `delegatesFocus: true` (like `ha-form`) will forward focus to their first focusable child.
 * Example: `<ha-form autofocus .schema=${schema}></ha-form>`
 *
 * @see https://github.com/home-assistant/frontend/issues/27143
 */
export declare class HaWaDialog extends LitElement {
    hass: HomeAssistant;
    open: boolean;
    width: DialogWidth;
    preventScrimClose: boolean;
    headerTitle: string;
    headerSubtitle: string;
    headerSubtitlePosition: "above" | "below";
    flexContent: boolean;
    private _open;
    bodyContainer: HTMLDivElement;
    private _bodyScrolled;
    protected updated(changedProperties: Map<string | number | symbol, unknown>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleShow;
    private _handleAfterShow;
    private _handleAfterHide;
    disconnectedCallback(): void;
    private _handleBodyScroll;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-wa-dialog": HaWaDialog;
    }
    interface HASSDomEvents {
        opened: undefined;
        "after-show": undefined;
        closed: undefined;
    }
}
