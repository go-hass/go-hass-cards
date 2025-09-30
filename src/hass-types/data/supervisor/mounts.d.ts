import type { HomeAssistant } from "../../types";
export declare enum SupervisorMountType {
    BIND = "bind",
    CIFS = "cifs",
    NFS = "nfs"
}
export declare enum SupervisorMountUsage {
    BACKUP = "backup",
    MEDIA = "media",
    SHARE = "share"
}
export declare enum SupervisorMountState {
    ACTIVE = "active",
    FAILED = "failed",
    UNKNOWN = "unknown"
}
interface MountOptions {
    default_backup_mount?: string | null;
}
export type CIFSVersion = "auto" | "1.0" | "2.0";
interface SupervisorMountBase {
    name: string;
    usage: SupervisorMountUsage;
    type: SupervisorMountType;
    server: string;
    port: number;
}
export interface SupervisorMountResponse extends SupervisorMountBase {
    state: SupervisorMountState | null;
}
export interface SupervisorNFSMount extends SupervisorMountResponse {
    type: SupervisorMountType.NFS;
    path: string;
}
export interface SupervisorCIFSMount extends SupervisorMountResponse {
    type: SupervisorMountType.CIFS;
    share: string;
    version?: CIFSVersion;
}
export type SupervisorMount = SupervisorNFSMount | SupervisorCIFSMount;
export type SupervisorNFSMountRequestParams = SupervisorNFSMount;
export interface SupervisorCIFSMountRequestParams extends SupervisorCIFSMount {
    username?: string;
    password?: string;
    version?: CIFSVersion;
}
export type SupervisorMountRequestParams = SupervisorNFSMountRequestParams | SupervisorCIFSMountRequestParams;
export interface SupervisorMounts {
    default_backup_mount: string | null;
    mounts: SupervisorMount[];
}
export declare const fetchSupervisorMounts: (hass: HomeAssistant) => Promise<SupervisorMounts>;
export declare const createSupervisorMount: (hass: HomeAssistant, data: SupervisorMountRequestParams) => Promise<void>;
export declare const updateSupervisorMount: (hass: HomeAssistant, data: Partial<SupervisorMountRequestParams>) => Promise<void>;
export declare const removeSupervisorMount: (hass: HomeAssistant, name: string) => Promise<void>;
export declare const reloadSupervisorMount: (hass: HomeAssistant, data: SupervisorMount) => Promise<void>;
export declare const changeMountOptions: (hass: HomeAssistant, data: MountOptions) => Promise<void>;
export {};
