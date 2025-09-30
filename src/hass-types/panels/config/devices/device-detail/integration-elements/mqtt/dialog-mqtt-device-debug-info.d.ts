import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../../components/ha-dialog";
import "../../../../../../components/ha-formfield";
import "../../../../../../components/ha-switch";
import "../../../../../../components/ha-button";
import type { HomeAssistant } from "../../../../../../types";
import "./mqtt-discovery-payload";
import "./mqtt-messages";
import type { MQTTDeviceDebugInfoDialogParams } from "./show-dialog-mqtt-device-debug-info";
declare class DialogMQTTDeviceDebugInfo extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _debugInfo?;
    private _showAsYaml;
    private _showDeserialized;
    showDialog(params: MQTTDeviceDebugInfoDialogParams): Promise<void>;
    protected render(): TemplateResult<1> | typeof nothing;
    private _close;
    private _showAsYamlChanged;
    private _showDeserializedChanged;
    private _renderEntities;
    private _renderTriggers;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-mqtt-device-debug-info": DialogMQTTDeviceDebugInfo;
    }
}
export {};
