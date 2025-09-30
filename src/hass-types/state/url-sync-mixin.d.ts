import type { ReactiveElement } from "lit";
import type { ProvideHassElement } from "../mixins/provide-hass-lit-mixin";
import type { Constructor } from "../types";
export declare const urlSyncMixin: <T extends Constructor<ReactiveElement & ProvideHassElement>>(superClass: T) => T;
