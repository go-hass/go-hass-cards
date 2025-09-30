import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import "../../../../components/ha-button";
import type { HomeAssistant } from "../../../../types";
import type { ScheduleBlockInfoDialogParams } from "./show-dialog-schedule-block-info";
declare class DialogScheduleBlockInfo extends LitElement {
    hass: HomeAssistant;
    private _error?;
    private _data?;
    private _params?;
    private _expand;
    private _schema;
    showDialog(params: ScheduleBlockInfoDialogParams): void;
    closeDialog(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    private _updateBlock;
    private _deleteBlock;
    private _computeLabelCallback;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-schedule-block-info": DialogScheduleBlockInfo;
    }
}
export {};
