import type { HassioHostInfo } from "../../../data/hassio/host";
export interface MoveDatadiskDialogParams {
    hostInfo: HassioHostInfo;
}
export declare const showMoveDatadiskDialog: (element: HTMLElement, dialogParams: MoveDatadiskDialogParams) => void;
