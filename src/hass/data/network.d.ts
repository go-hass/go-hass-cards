import type { HomeAssistant } from "../types";
export interface IPv6ConfiguredAddress {
    address: string;
    flowinfo: number;
    scope_id: number;
    network_prefix: number;
}
export interface IPv4ConfiguredAddress {
    address: string;
    network_prefix: number;
}
export interface Adapter {
    name: string;
    enabled: boolean;
    auto: boolean;
    default: boolean;
    ipv6: IPv6ConfiguredAddress[];
    ipv4: IPv4ConfiguredAddress[];
}
export interface NetworkConfig {
    adapters: Adapter[];
    configured_adapters: string[];
}
export interface NetworkUrls {
    internal: string;
    external: string;
    cloud: string;
}
export declare const getNetworkConfig: (hass: HomeAssistant) => Promise<NetworkConfig>;
export declare const setNetworkConfig: (hass: HomeAssistant, configured_adapters: string[]) => Promise<string[]>;
export declare const getNetworkUrls: (hass: HomeAssistant) => Promise<NetworkUrls>;
