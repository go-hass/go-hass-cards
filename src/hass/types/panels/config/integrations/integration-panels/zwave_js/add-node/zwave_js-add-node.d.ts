import type { HomeAssistant } from "../../../../../../types";
export declare class DialogZWaveJSAddNode extends HTMLElement {
    hass: HomeAssistant;
    configEntryId: string;
    connectedCallback(): void;
    private _openDialog;
}
declare global {
    interface HTMLElementTagNameMap {
        "zwave_js-add-node": DialogZWaveJSAddNode;
    }
}
