import type { Person, PersonMutableParams } from "../../../data/person";
import type { User } from "../../../data/user";
export interface PersonDetailDialogParams {
    entry?: Person;
    users?: User[];
    refreshUsers?: () => void;
    createEntry?: (values: PersonMutableParams) => Promise<unknown>;
    updateEntry?: (updates: Partial<PersonMutableParams>) => Promise<unknown>;
    removeEntry?: () => Promise<boolean>;
}
export declare const loadPersonDetailDialog: () => Promise<typeof import("./dialog-person-detail")>;
export declare const showPersonDetailDialog: (element: HTMLElement, params: PersonDetailDialogParams) => void;
