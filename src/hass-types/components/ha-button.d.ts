import Button from "@home-assistant/webawesome/dist/components/button/button";
import { type CSSResultGroup } from "lit";
export type Appearance = "accent" | "filled" | "outlined" | "plain";
/**
 * Home Assistant button component
 *
 * @element ha-button
 * @extends {Button}
 *
 * @summary
 * A stylable button component supporting Home Assistant theming, variants, and appearances based on webawesome button.
 *
 * @slot - Label of the button
 * @slot start - The prefix container (usually for icons).
 * @slot end - The suffix container (usually for icons).
 *
 * @csspart base - The component's base wrapper.
 * @csspart start - The container that wraps the prefix.
 * @csspart label - The button's label.
 * @csspart end - The container that wraps the suffix.
 * @csspart caret - The button's caret icon, an `<sl-icon>` element.
 * @csspart spinner - The spinner that shows when the button is in the loading state.
 *
 * @cssprop --ha-button-height - The height of the button.
 * @cssprop --ha-button-border-radius - The border radius of the button. defaults to `var(--ha-border-radius-pill)`.
 *
 * @attr {("small"|"medium")} size - Sets the button size.
 * @attr {("brand"|"neutral"|"danger"|"warning"|"success")} variant - Sets the button color variant. "primary" is default.
 * @attr {("accent"|"filled"|"plain")} appearance - Sets the button appearance.
 * @attr {boolean} loading - shows a loading indicator instead of the buttons label and disable buttons click.
 * @attr {boolean} disabled - Disables the button and prevents user interaction.
 */
export declare class HaButton extends Button {
    variant: "brand" | "neutral" | "success" | "warning" | "danger";
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-button": HaButton;
    }
}
