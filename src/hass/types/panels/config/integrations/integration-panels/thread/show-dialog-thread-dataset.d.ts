import type { OTBRInfo } from "../../../../../data/otbr";
import type { ThreadNetwork } from "./thread-config-panel";
export interface DialogThreadDatasetParams {
    network: ThreadNetwork;
    otbrInfo?: OTBRInfo;
}
export declare const showThreadDatasetDialog: (element: HTMLElement, dialogParams: DialogThreadDatasetParams) => void;
