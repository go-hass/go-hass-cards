import type { HomeAssistantMain } from "../layouts/home-assistant-main";
import type { EMIncomingMessageBarCodeScanAborted, EMIncomingMessageBarCodeScanResult, EMIncomingMessageCommands, ImprovDiscoveredDevice } from "./external_messaging";
export declare const attachExternalToApp: (hassMainEl: HomeAssistantMain) => void;
export declare const addExternalBarCodeListener: (listener: (msg: EMIncomingMessageBarCodeScanResult | EMIncomingMessageBarCodeScanAborted) => boolean) => () => void;
export declare const handleExternalMessage: (hassMainEl: HomeAssistantMain, msg: EMIncomingMessageCommands) => boolean;
declare global {
    interface HASSDomEvents {
        "improv-discovered-device": ImprovDiscoveredDevice;
        "improv-device-setup-done": undefined;
    }
}
