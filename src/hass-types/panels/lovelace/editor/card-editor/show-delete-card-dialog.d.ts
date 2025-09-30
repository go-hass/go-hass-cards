import type { LovelaceCardConfig } from "../../../../data/lovelace/config/card";
export interface DeleteCardDialogParams {
    deleteCard: () => void;
    cardConfig?: LovelaceCardConfig;
}
export declare const importDeleteCardDialog: () => Promise<typeof import("./hui-dialog-delete-card")>;
export declare const showDeleteCardDialog: (element: HTMLElement, deleteCardDialogParams: DeleteCardDialogParams) => void;
