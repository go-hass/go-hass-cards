import { LitElement, nothing } from "lit";
import "../../../components/ha-icon";
import type { LovelaceRow, TextConfig } from "../entity-rows/types";
declare class HuiTextRow extends LitElement implements LovelaceRow {
    private _config?;
    setConfig(config: TextConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-text-row": HuiTextRow;
    }
}
export {};
