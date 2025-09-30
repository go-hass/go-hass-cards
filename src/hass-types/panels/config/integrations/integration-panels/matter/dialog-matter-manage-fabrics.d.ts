import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-list";
import "../../../../../components/ha-list-item";
import "../../../../../components/ha-qr-code";
import "../../../../../components/ha-spinner";
import type { HomeAssistant } from "../../../../../types";
import type { MatterManageFabricsDialogParams } from "./show-dialog-matter-manage-fabrics";
declare class DialogMatterManageFabrics extends LitElement {
    hass: HomeAssistant;
    private device_id?;
    private _nodeDiagnostics?;
    showDialog(params: MatterManageFabricsDialogParams): Promise<void>;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _fetchNodeDetails;
    private _removeFabric;
    closeDialog(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-matter-manage-fabrics": DialogMatterManageFabrics;
    }
}
export {};
