import type { Cluster, ZHADevice, ZHAGroup } from "../../../../../data/zha";
export declare const formatAsPaddedHex: (value: string | number) => string;
export declare const getIeeeTail: (ieee: string) => string;
export declare const sortZHADevices: (a: ZHADevice, b: ZHADevice) => number;
export declare const sortZHAGroups: (a: ZHAGroup, b: ZHAGroup) => number;
export declare const computeClusterKey: (cluster: Cluster) => string;
