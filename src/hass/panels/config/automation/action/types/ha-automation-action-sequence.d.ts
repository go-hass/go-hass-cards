import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-textfield";
import type { SequenceAction } from "../../../../../data/script";
import type { HomeAssistant } from "../../../../../types";
import "../ha-automation-action";
import type { ActionElement } from "../ha-automation-action-row";
export declare class HaSequenceAction extends LitElement implements ActionElement {
    hass: HomeAssistant;
    disabled: boolean;
    narrow: boolean;
    action: SequenceAction;
    indent: boolean;
    private _actionElement?;
    static get defaultConfig(): SequenceAction;
    protected render(): import("lit-html").TemplateResult<1>;
    private _actionsChanged;
    expandAll(): void;
    collapseAll(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-sequence": HaSequenceAction;
    }
}
