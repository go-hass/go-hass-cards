import type { TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-control-button";
import "../../components/ha-control-button-group";
import "../../components/ha-control-slider";
import "../../components/ha-svg-icon";
import type { CoverEntity } from "../../data/cover";
import type { HomeAssistant } from "../../types";
type CoverButton = "open" | "close" | "stop" | "open-tilt" | "close-tilt" | "none";
interface CoverLayout {
    type: "line" | "cross";
    buttons: CoverButton[];
}
export declare const getCoverLayout: import("memoize-one").MemoizedFn<(stateObj: CoverEntity) => CoverLayout>;
export declare class HaStateControlCoverButtons extends LitElement {
    hass: HomeAssistant;
    stateObj: CoverEntity;
    private _onOpenTap;
    private _onCloseTap;
    private _onOpenTiltTap;
    private _onCloseTiltTap;
    private _onStopTap;
    protected renderButton(button: CoverButton | undefined): TemplateResult<1> | typeof nothing;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-control-cover-buttons": HaStateControlCoverButtons;
    }
}
export {};
