import type { ReactiveController, ReactiveControllerHost } from "@lit/reactive-element/reactive-controller";
import type { LitElement } from "lit";
/**
 * The config options for a DragScrollController.
 */
export interface DragScrollControllerConfig {
    selector: string;
    enabled?: boolean;
}
export declare class DragScrollController implements ReactiveController {
    mouseIsDown: boolean;
    scrolled: boolean;
    scrolling: boolean;
    scrollStartX: number;
    scrollLeft: number;
    private _host;
    private _selector;
    private _scrollContainer?;
    private _enabled;
    get enabled(): boolean;
    set enabled(value: boolean);
    constructor(host: ReactiveControllerHost & LitElement, { selector, enabled }: DragScrollControllerConfig);
    hostUpdated(): void;
    hostDisconnected(): void;
    private _attach;
    private _detach;
    private _mouseDown;
    private _mouseUp;
    private _mouseMove;
}
