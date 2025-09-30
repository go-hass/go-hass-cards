import type { GenerateBackupParams } from "../../../../data/backup";
import type { CloudStatus } from "../../../../data/cloud";
export interface GenerateBackupDialogParams {
    submit?: (response: GenerateBackupParams) => void;
    cancel?: () => void;
    cloudStatus?: CloudStatus;
}
export declare const loadGenerateBackupDialog: () => Promise<typeof import("./dialog-generate-backup")>;
export declare const showGenerateBackupDialog: (element: HTMLElement, params: GenerateBackupDialogParams) => Promise<GenerateBackupParams>;
