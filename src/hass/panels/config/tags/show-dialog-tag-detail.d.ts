import type { Tag, UpdateTagParams } from "../../../data/tag";
export interface TagDetailDialogParams {
    entry?: Tag;
    openWrite?: (tag: Tag) => void;
    createEntry: (values: Partial<UpdateTagParams>, tagId?: string) => Promise<Tag>;
    updateEntry?: (updates: Partial<UpdateTagParams>) => Promise<Tag>;
    removeEntry?: () => Promise<boolean>;
}
export declare const loadTagDetailDialog: () => Promise<typeof import("./dialog-tag-detail")>;
export declare const showTagDetailDialog: (element: HTMLElement, systemLogDetailParams: TagDetailDialogParams) => void;
