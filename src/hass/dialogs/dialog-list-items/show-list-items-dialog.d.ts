interface ListItem {
    icon?: string;
    iconPath?: string;
    label: string;
    description?: string;
    action: () => any;
}
export interface ListItemsDialogParams {
    title?: string;
    items: ListItem[];
    mode?: "dialog" | "bottom-sheet";
}
export declare const showListItemsDialog: (element: HTMLElement, params: ListItemsDialogParams) => Event;
export {};
