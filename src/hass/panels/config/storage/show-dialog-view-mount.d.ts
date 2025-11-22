import type { SupervisorMount } from "../../../data/supervisor/mounts";
export interface MountViewDialogParams {
    mount?: SupervisorMount;
    reloadMounts: () => void;
}
export declare const showMountViewDialog: (element: HTMLElement, dialogParams: MountViewDialogParams) => void;
