import type { HomeAssistant } from "../../types";
interface IpConfiguration {
    address: string[];
    gateway: string | null;
    method: "disabled" | "static" | "auto";
    nameservers: string[];
}
export interface NetworkInterface {
    primary: boolean;
    privacy: boolean;
    interface: string;
    enabled: boolean;
    ipv4?: Partial<IpConfiguration>;
    ipv6?: Partial<IpConfiguration>;
    type: "ethernet" | "wireless" | "vlan";
    wifi?: Partial<WifiConfiguration> | null;
}
export interface DockerNetwork {
    address: string;
    dns: string;
    gateway: string;
    interface: string;
}
export interface AccessPoint {
    mode: "infrastructure" | "mesh" | "adhoc" | "ap";
    ssid: string;
    mac: string;
    frequency: number;
    signal: number;
}
export interface AccessPoints {
    accesspoints: AccessPoint[];
}
export interface WifiConfiguration {
    mode: "infrastructure" | "mesh" | "adhoc" | "ap";
    auth: "open" | "wep" | "wpa-psk";
    ssid: string;
    signal: number;
    psk?: string;
}
export interface NetworkInfo {
    interfaces: NetworkInterface[];
    docker: DockerNetwork;
}
export declare const fetchNetworkInfo: (hass: HomeAssistant) => Promise<NetworkInfo>;
export declare const updateNetworkInterface: (hass: HomeAssistant, network_interface: string, options: Partial<NetworkInterface>) => Promise<void>;
export declare const accesspointScan: (hass: HomeAssistant, network_interface: string) => Promise<AccessPoints>;
export declare const parseAddress: (address: string) => {
    ip: string;
    mask: string;
    prefix: string;
};
export declare const formatAddress: (ip: string, mask: string) => string;
export declare const cidrToNetmask: (cidr: string, isIPv6?: boolean) => string;
export declare const netmaskToCidr: (netmask: string) => number;
export {};
