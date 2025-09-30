import type { ApplicationCredential } from "../../../data/application_credential";
import type { IntegrationManifest } from "../../../data/integration";
export interface AddApplicationCredentialDialogParams {
    applicationCredentialAddedCallback: (applicationCredential: ApplicationCredential) => void;
    dialogAbortedCallback?: () => void;
    selectedDomain?: string;
    manifest?: IntegrationManifest | null;
}
export declare const loadAddApplicationCredentialDialog: () => Promise<typeof import("./dialog-add-application-credential")>;
export declare const showAddApplicationCredentialDialog: (element: HTMLElement, dialogParams: AddApplicationCredentialDialogParams) => void;
