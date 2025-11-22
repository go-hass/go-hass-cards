import type { DeviceRegistryEntry } from "../../../../data/device_registry";
import type { EntityRegistryEntry } from "../../../../data/entity_registry";
export interface DeviceAutomationDialogParams {
    device: DeviceRegistryEntry;
    entityReg: EntityRegistryEntry[];
    script?: boolean;
}
export declare const loadDeviceAutomationDialog: () => Promise<typeof import("./ha-device-automation-dialog")>;
export declare const showDeviceAutomationDialog: (element: HTMLElement, detailParams: DeviceAutomationDialogParams) => void;
