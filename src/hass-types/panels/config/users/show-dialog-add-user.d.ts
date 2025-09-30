import type { User } from "../../../data/user";
export interface AddUserDialogParams {
    userAddedCallback: (user: User) => void;
    name?: string;
}
export declare const loadAddUserDialog: () => Promise<typeof import("./dialog-add-user")>;
export declare const showAddUserDialog: (element: HTMLElement, dialogParams: AddUserDialogParams) => void;
