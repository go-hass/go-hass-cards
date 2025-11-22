import type { ManagerState } from "../../data/backup_manager";
export interface RestartDialogParams {
}
export declare const loadRestartDialog: () => Promise<typeof import("./dialog-restart")>;
export declare const loadRestartWaitDialog: () => Promise<typeof import("./dialog-restart-wait")>;
export declare const showRestartDialog: (element: HTMLElement) => void;
export interface RestartWaitDialogParams {
    title: string;
    initialBackupState: ManagerState;
    action: () => Promise<void>;
}
export declare const showRestartWaitDialog: (element: HTMLElement, dialogParams: RestartWaitDialogParams) => void;
