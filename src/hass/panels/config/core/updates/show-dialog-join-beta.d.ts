import "./dialog-join-beta";
export interface JoinBetaDialogParams {
    join?: () => any;
    cancel?: () => any;
}
export declare const showJoinBetaDialog: (element: HTMLElement, dialogParams: JoinBetaDialogParams) => void;
