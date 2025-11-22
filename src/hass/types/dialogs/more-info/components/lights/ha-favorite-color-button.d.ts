import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-outlined-icon-button";
import "../../../../components/ha-svg-icon";
import type { LightColor, LightEntity } from "../../../../data/light";
declare class MoreInfoViewLightColorPicker extends LitElement {
    focus(): void;
    label?: string;
    disabled: boolean;
    stateObj?: LightEntity;
    color: LightColor;
    private _button?;
    private get _rgbColor();
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-favorite-color-button": MoreInfoViewLightColorPicker;
    }
}
export {};
