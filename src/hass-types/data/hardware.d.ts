export declare const BOARD_NAMES: Record<string, string>;
export interface HardwareInfo {
    hardware: HardwareInfoEntry[];
}
export interface HardwareInfoEntry {
    board: HardwareInfoBoardInfo | null;
    dongle: HardwareInfoDongleInfo | null;
    config_entries: string[];
    name: string;
    url?: string;
}
export interface HardwareInfoBoardInfo {
    manufacturer: string;
    model?: string;
    revision?: string;
    hassio_board_id?: string;
}
export interface HardwareInfoDongleInfo {
    manufacturer: string;
    description: string;
    pid?: string;
    vid?: string;
    serial_number?: string;
}
export interface SystemStatusStreamMessage {
    cpu_percent: number;
    memory_free_mb: number;
    memory_used_mb: number;
    memory_used_percent: number;
    timestamp: string;
}
