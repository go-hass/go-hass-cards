import type { MediaPlayerItem } from "../../data/media-player";
export interface MediaManageDialogParams {
    currentItem: MediaPlayerItem;
    onClose?: () => void;
}
export declare const showMediaManageDialog: (element: HTMLElement, dialogParams: MediaManageDialogParams) => void;
