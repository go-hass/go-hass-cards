import type { BackupConfig } from "../../../../data/backup";
import type { CloudStatus } from "../../../../data/cloud";
export interface BackupOnboardingDialogParams {
    submit?: (value: boolean) => void;
    cancel?: () => void;
    config: BackupConfig;
    cloudStatus?: CloudStatus;
    skipWelcome?: boolean;
}
export declare const showBackupOnboardingDialog: (element: HTMLElement, params?: BackupOnboardingDialogParams) => Promise<boolean>;
