import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import "../components/hui-generic-entity-row";
import "../../../components/ha-button";
import type { ActionRowConfig, LovelaceRow } from "./types";
declare class HuiScriptEntityRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: ActionRowConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
    private _cancelScript;
    private _runScript;
    private _callService;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-script-entity-row": HuiScriptEntityRow;
    }
}
export {};
