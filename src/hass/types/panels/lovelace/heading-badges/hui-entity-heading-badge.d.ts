import { LitElement, nothing } from "lit";
import "../../../components/ha-heading-badge";
import "../../../components/ha-state-icon";
import "../../../state-display/state-display";
import type { HomeAssistant } from "../../../types";
import type { LovelaceHeadingBadge, LovelaceHeadingBadgeEditor } from "../types";
export declare class HuiEntityHeadingBadge extends LitElement implements LovelaceHeadingBadge {
    static getConfigElement(): Promise<LovelaceHeadingBadgeEditor>;
    hass?: HomeAssistant;
    private _config?;
    preview: boolean;
    setConfig(config: any): void;
    get hasAction(): boolean;
    private _handleAction;
    private _computeStateColor;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-entity-heading-badge": HuiEntityHeadingBadge;
    }
}
