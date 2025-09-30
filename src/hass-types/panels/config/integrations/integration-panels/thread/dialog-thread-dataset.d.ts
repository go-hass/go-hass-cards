import { LitElement, nothing } from "lit";
import type { HassDialog } from "../../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../../types";
import type { DialogThreadDatasetParams } from "./show-dialog-thread-dataset";
declare class DialogThreadDataset extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _params?;
    showDialog(params: DialogThreadDatasetParams): Promise<Promise<void>>;
    closeDialog(): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-thread-dataset": DialogThreadDataset;
    }
}
export {};
