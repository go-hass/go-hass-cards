import type { AutomationConfig } from "../../../../data/automation";
import type { ScriptConfig } from "../../../../data/script";
import type { EntityRegistryEntry } from "../../../../data/entity_registry";
export declare const loadAutomationSaveDialog: () => Promise<typeof import("./dialog-automation-save")>;
interface BaseRenameDialogParams {
    entityRegistryUpdate?: EntityRegistryUpdate;
    entityRegistryEntry?: EntityRegistryEntry;
    onClose: () => void;
    onDiscard?: () => void;
    saveText?: string;
    description?: string;
    title?: string;
    hideInputs?: boolean;
}
export interface EntityRegistryUpdate {
    area: string;
    labels: string[];
    category: string;
}
export interface AutomationSaveDialogParams extends BaseRenameDialogParams {
    config: AutomationConfig;
    domain: "automation";
    updateConfig: (config: AutomationConfig, entityRegistryUpdate: EntityRegistryUpdate) => Promise<void>;
}
export interface ScriptSaveDialogParams extends BaseRenameDialogParams {
    config: ScriptConfig;
    domain: "script";
    updateConfig: (config: ScriptConfig, entityRegistryUpdate: EntityRegistryUpdate) => Promise<void>;
}
export type SaveDialogParams = AutomationSaveDialogParams | ScriptSaveDialogParams;
export declare const showAutomationSaveDialog: (element: HTMLElement, dialogParams: SaveDialogParams) => void;
export {};
