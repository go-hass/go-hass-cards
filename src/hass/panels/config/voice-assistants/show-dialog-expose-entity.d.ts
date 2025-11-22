import type { ExposeEntitySettings } from "../../../data/expose";
export interface ExposeEntityDialogParams {
    filterAssistants: string[];
    exposedEntities: Record<string, ExposeEntitySettings>;
    exposeEntities: (entities: string[]) => void;
}
export declare const loadExposeEntityDialog: () => Promise<typeof import("./dialog-expose-entity")>;
export declare const showExposeEntityDialog: (element: HTMLElement, dialogParams: ExposeEntityDialogParams) => void;
