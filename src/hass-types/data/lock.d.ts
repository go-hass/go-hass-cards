import type { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
export declare const enum LockEntityFeature {
    OPEN = 1
}
interface LockEntityAttributes extends HassEntityAttributeBase {
    code_format?: string;
    changed_by?: string | null;
}
export interface LockEntity extends HassEntityBase {
    attributes: LockEntityAttributes;
}
type ProtectedLockService = "lock" | "unlock" | "open";
export declare function isLocked(stateObj: LockEntity): boolean;
export declare function isUnlocked(stateObj: LockEntity): boolean;
export declare function isUnlocking(stateObj: LockEntity): boolean;
export declare function isLocking(stateObj: LockEntity): boolean;
export declare function isJammed(stateObj: LockEntity): boolean;
export declare function isOpen(stateObj: LockEntity): boolean;
export declare function isOpening(stateObj: LockEntity): boolean;
export declare function isWaiting(stateObj: LockEntity): boolean;
export declare function canOpen(stateObj: LockEntity): boolean;
export declare function canLock(stateObj: LockEntity): boolean;
export declare function canUnlock(stateObj: LockEntity): boolean;
export declare const callProtectedLockService: (element: HTMLElement, hass: HomeAssistant, stateObj: LockEntity, service: ProtectedLockService) => Promise<void>;
export {};
