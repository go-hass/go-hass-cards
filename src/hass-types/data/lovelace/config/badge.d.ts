import type { Condition } from "../../../panels/lovelace/common/validate-condition";
export interface LovelaceBadgeConfig {
    type: string;
    [key: string]: any;
    visibility?: Condition[];
    disabled?: boolean;
}
export declare const ensureBadgeConfig: (config: Partial<LovelaceBadgeConfig> | string) => LovelaceBadgeConfig;
