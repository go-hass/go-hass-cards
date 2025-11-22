import type { ReactiveController, ReactiveControllerHost } from "@lit/reactive-element/reactive-controller";
/**
 * Configuration options for the UndoRedoController.
 *
 * @template ConfigType The type of configuration to manage.
 */
export interface UndoRedoControllerConfig<ConfigType> {
    stackLimit?: number;
    currentConfig: () => ConfigType;
    apply: (config: ConfigType) => void;
}
/**
 * A controller to manage undo and redo operations for a given configuration type.
 *
 * @template ConfigType The type of configuration to manage.
 */
export declare class UndoRedoController<ConfigType> implements ReactiveController {
    private _host;
    private _undoStack;
    private _redoStack;
    private readonly _stackLimit;
    private readonly _apply;
    private readonly _currentConfig;
    constructor(host: ReactiveControllerHost, options: UndoRedoControllerConfig<ConfigType>);
    hostConnected(): void;
    hostDisconnected(): void;
    private _onUndoChange;
    /**
     * Indicates whether there are actions available to undo.
     *
     * @returns `true` if there are actions to undo, `false` otherwise.
     */
    get canUndo(): boolean;
    /**
     * Indicates whether there are actions available to redo.
     *
     * @returns `true` if there are actions to redo, `false` otherwise.
     */
    get canRedo(): boolean;
    /**
     * Commits the current configuration to the undo stack and clears the redo stack.
     *
     * @param config The current configuration to commit.
     */
    commit(config: ConfigType): void;
    /**
     * Undoes the last action and applies the previous configuration
     * while saving the current configuration to the redo stack.
     */
    undo(): void;
    /**
     * Redoes the last undone action and reapplies the configuration
     * while saving the current configuration to the undo stack.
     */
    redo(): void;
    /**
     * Resets the undo and redo stacks, clearing all history.
     */
    reset(): void;
}
declare global {
    interface HASSDomEvents {
        "undo-change": undefined;
    }
}
