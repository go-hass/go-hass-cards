import type { AutomationConfig } from "../../../../data/automation";
import type { ScriptConfig } from "../../../../data/script";
export declare const loadAutomationModeDialog: () => Promise<typeof import("./dialog-automation-mode")>;
export interface AutomationModeDialog {
    config: AutomationConfig;
    updateConfig: (config: AutomationConfig) => void;
    onClose: () => void;
}
export interface ScriptModeDialog {
    config: ScriptConfig;
    updateConfig: (config: ScriptConfig) => void;
    onClose: () => void;
}
export declare const showAutomationModeDialog: (element: HTMLElement, dialogParams: AutomationModeDialog | ScriptModeDialog) => void;
