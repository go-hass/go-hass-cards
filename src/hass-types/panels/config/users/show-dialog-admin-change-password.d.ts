export interface AdminChangePasswordDialogParams {
    userId: string;
}
export declare const loadAdminChangePasswordDialog: () => Promise<typeof import("./dialog-admin-change-password")>;
export declare const showAdminChangePasswordDialog: (element: HTMLElement, dialogParams: AdminChangePasswordDialogParams) => void;
