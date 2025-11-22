import { LitElement } from "lit";
/**
 * Home Assistant tile info component
 *
 * @element ha-tile-info
 *
 * @summary
 * A tile info component, used in tile card in Home Assistant to display primary and secondary text.
 *
 * @slot primary - The primary text container.
 * @slot secondary - The secondary text container.
 *
 * @cssprop --ha-tile-info-primary-font-size - The font size of the primary text. defaults to `var(--ha-font-size-m)`.
 * @cssprop --ha-tile-info-primary-font-weight - The font weight of the primary text. defaults to `var(--ha-font-weight-medium)`.
 * @cssprop --ha-tile-info-primary-line-height - The line height of the primary text. defaults to `var(--ha-line-height-normal)`.
 * @cssprop --ha-tile-info-primary-letter-spacing - The letter spacing of the primary text. defaults to `0.1px`.
 * @cssprop --ha-tile-info-primary-color - The color of the primary text. defaults to `var(--primary-text-color)`.
 * @cssprop --ha-tile-info-secondary-font-size - The font size of the secondary text. defaults to `var(--ha-font-size-s)`.
 * @cssprop --ha-tile-info-secondary-font-weight - The font weight of the secondary text. defaults to `var(--ha-font-weight-normal)`.
 * @cssprop --ha-tile-info-secondary-line-height - The line height of the secondary text. defaults to `var(--ha-line-height-condensed)`.
 * @cssprop --ha-tile-info-secondary-letter-spacing - The letter spacing of the secondary text. defaults to `0.4px`.
 * @cssprop --ha-tile-info-secondary-color - The color of the secondary text. defaults to `var(--primary-text-color)`.
 */
export declare class HaTileInfo extends LitElement {
    primary?: string;
    secondary?: string;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tile-info": HaTileInfo;
    }
}
