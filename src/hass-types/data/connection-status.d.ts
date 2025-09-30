/**
 * Broadcast connection status updates
 */
import type { HASSDomEvent } from "../common/dom/fire_event";
export type ConnectionStatus = "connected" | "auth-invalid" | "disconnected";
declare global {
    interface HASSDomEvents {
        "connection-status": ConnectionStatus;
    }
    interface GlobalEventHandlersEventMap {
        "connection-status": HASSDomEvent<ConnectionStatus>;
    }
}
export declare const broadcastConnectionStatus: (status: ConnectionStatus) => void;
