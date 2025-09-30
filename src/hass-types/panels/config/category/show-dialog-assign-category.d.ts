import type { EntityRegistryEntry } from "../../../data/entity_registry";
export interface AssignCategoryDialogParams {
    entityReg: EntityRegistryEntry;
    scope: string;
}
export declare const loadAssignCategoryDialog: () => Promise<typeof import("./dialog-assign-category")>;
export declare const showAssignCategoryDialog: (element: HTMLElement, dialogParams: AssignCategoryDialogParams) => void;
