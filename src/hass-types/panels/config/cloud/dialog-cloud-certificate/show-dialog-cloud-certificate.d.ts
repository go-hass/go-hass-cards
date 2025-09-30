import type { CertificateInformation } from "../../../../data/cloud";
export interface CloudCertificateParams {
    certificateInfo: CertificateInformation;
}
export declare const showCloudCertificateDialog: (element: HTMLElement, webhookDialogParams: CloudCertificateParams) => void;
