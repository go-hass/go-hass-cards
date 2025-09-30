import type { Auth, Connection } from "home-assistant-js-websocket";
declare global {
    interface Window {
        hassConnection: Promise<{
            auth: Auth;
            conn: Connection;
        }>;
        hassConnectionReady?: (hassConnection: Window["hassConnection"]) => void;
    }
}
