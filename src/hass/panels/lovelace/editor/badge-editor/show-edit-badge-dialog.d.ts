import type { LovelaceBadgeConfig } from "../../../../data/lovelace/config/badge";
import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
import type { LovelaceContainerPath } from "../lovelace-path";
export type EditBadgeDialogParams = {
    lovelaceConfig: LovelaceConfig;
    saveConfig: (config: LovelaceConfig) => void;
    path: LovelaceContainerPath;
} & ({
    badgeIndex: number;
} | {
    badgeConfig: LovelaceBadgeConfig;
});
export declare const importEditBadgeDialog: () => Promise<typeof import("./hui-dialog-edit-badge")>;
export declare const showEditBadgeDialog: (element: HTMLElement, editBadgeDialogParams: EditBadgeDialogParams) => void;
