export interface ZHAChangeChannelDialogParams {
    currentChannel: number;
}
export declare const loadZHAChangeChannelDialog: () => Promise<typeof import("./dialog-zha-change-channel")>;
export declare const showZHAChangeChannelDialog: (element: HTMLElement, zhaChangeChannelParams: ZHAChangeChannelDialogParams) => void;
