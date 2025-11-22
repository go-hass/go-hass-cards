import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../components/data-table/ha-data-table";
import "../../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../../types";
declare class AssistDevicesPage extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _pipelines;
    private _preferred;
    private _devices?;
    private _columns;
    private _data;
    protected firstUpdated(changedProps: PropertyValues): void;
    render(): import("lit-html").TemplateResult<1>;
    private _handleRowClicked;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-voice-assistants-assist-devices": AssistDevicesPage;
    }
}
export {};
