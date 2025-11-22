import type { CategoryRegistryEntry, CategoryRegistryEntryMutableParams } from "../../../data/category_registry";
export interface CategoryRegistryDetailDialogParams {
    entry?: CategoryRegistryEntry;
    scope: string;
    suggestedName?: string;
    createEntry?: (values: CategoryRegistryEntryMutableParams) => Promise<CategoryRegistryEntry>;
    updateEntry?: (updates: Partial<CategoryRegistryEntryMutableParams>) => Promise<CategoryRegistryEntry>;
}
export declare const loadCategoryRegistryDetailDialog: () => Promise<typeof import("./dialog-category-registry-detail")>;
export declare const showCategoryRegistryDetailDialog: (element: HTMLElement, dialogParams: CategoryRegistryDetailDialogParams) => void;
