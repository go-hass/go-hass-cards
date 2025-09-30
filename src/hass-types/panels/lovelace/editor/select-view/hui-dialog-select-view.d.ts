import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-button";
import "../../../../components/ha-icon";
import "../../../../components/ha-list";
import "../../../../components/ha-list-item";
import "../../../../components/ha-radio-list-item";
import "../../../../components/ha-select";
import type { HomeAssistant } from "../../../../types";
import type { SelectViewDialogParams } from "./show-select-view-dialog";
declare global {
    interface HASSDomEvents {
        "view-selected": {
            view: number;
        };
    }
}
export declare class HuiDialogSelectView extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _dashboards;
    private _urlPath?;
    private _config?;
    private _selectedViewIdx;
    showDialog(params: SelectViewDialogParams): void;
    closeDialog(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _getDashboards;
    private _dashboardChanged;
    private _viewChanged;
    private _selectView;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-select-view": HuiDialogSelectView;
    }
}
