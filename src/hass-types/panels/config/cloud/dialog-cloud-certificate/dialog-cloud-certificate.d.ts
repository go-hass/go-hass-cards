import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../../types";
import "../../../../components/ha-button";
import type { CloudCertificateParams as CloudCertificateDialogParams } from "./show-dialog-cloud-certificate";
declare class DialogCloudCertificate extends LitElement {
    hass: HomeAssistant;
    private _params?;
    showDialog(params: CloudCertificateDialogParams): void;
    closeDialog(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-cloud-certificate": DialogCloudCertificate;
    }
}
export {};
