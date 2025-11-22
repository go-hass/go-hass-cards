export interface CloudAlreadyConnectedParams {
    details: {
        remote_ip_address: string;
        connected_at: string;
        name?: string;
        version?: string;
    };
    logInHereAction?: () => void;
    closeDialog?: () => void;
}
export declare const showCloudAlreadyConnectedDialog: (element: HTMLElement, webhookDialogParams: CloudAlreadyConnectedParams) => Promise<unknown>;
