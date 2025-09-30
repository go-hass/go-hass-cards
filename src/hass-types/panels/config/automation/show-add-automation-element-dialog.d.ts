import type { ACTION_GROUPS } from "../../../data/action";
import type { ActionType } from "../../../data/script";
export declare const PASTE_VALUE = "__paste__";
export declare const VIRTUAL_ACTIONS: Record<keyof (typeof ACTION_GROUPS)["building_blocks"]["members"], ActionType>;
export interface AddAutomationElementDialogParams {
    type: "trigger" | "condition" | "action";
    add: (key: string) => void;
    clipboardItem: string | undefined;
    group?: string;
}
export declare const showAddAutomationElementDialog: (element: HTMLElement, dialogParams: AddAutomationElementDialogParams) => void;
