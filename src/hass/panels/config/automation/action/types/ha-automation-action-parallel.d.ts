import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-textfield";
import type { ParallelAction } from "../../../../../data/script";
import type { HomeAssistant } from "../../../../../types";
import "../ha-automation-action";
import type { ActionElement } from "../ha-automation-action-row";
export declare class HaParallelAction extends LitElement implements ActionElement {
    hass: HomeAssistant;
    disabled: boolean;
    narrow: boolean;
    action: ParallelAction;
    indent: boolean;
    private _actionElement?;
    static get defaultConfig(): ParallelAction;
    protected render(): import("lit-html").TemplateResult<1>;
    private _actionsChanged;
    expandAll(): void;
    collapseAll(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-parallel": HaParallelAction;
    }
}
