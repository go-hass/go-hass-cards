export interface WebBrowserPlayMediaDialogParams {
    sourceUrl: string;
    sourceType: string;
    title?: string;
    can_play?: boolean;
}
export declare const showWebBrowserPlayMediaDialog: (element: HTMLElement, webBrowserPlayMediaDialogParams: WebBrowserPlayMediaDialogParams) => void;
