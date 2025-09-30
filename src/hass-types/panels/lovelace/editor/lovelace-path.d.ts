import type { LovelaceBadgeConfig } from "../../../data/lovelace/config/badge";
import type { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import type { LovelaceSectionRawConfig } from "../../../data/lovelace/config/section";
import type { LovelaceConfig } from "../../../data/lovelace/config/types";
import type { LovelaceViewRawConfig } from "../../../data/lovelace/config/view";
export type LovelaceCardPath = [number, number] | [number, number, number];
export type LovelaceContainerPath = [number] | [number, number];
export declare const parseLovelaceCardPath: (path: LovelaceCardPath) => {
    viewIndex: number;
    sectionIndex?: number;
    cardIndex: number;
};
export declare const parseLovelaceContainerPath: (path: LovelaceContainerPath) => {
    viewIndex: number;
    sectionIndex?: number;
};
export declare const getLovelaceContainerPath: (path: LovelaceCardPath) => LovelaceContainerPath;
interface FindLovelaceContainer {
    (config: LovelaceConfig, path: [number]): LovelaceViewRawConfig;
    (config: LovelaceConfig, path: [number, number]): LovelaceSectionRawConfig;
    (config: LovelaceConfig, path: LovelaceContainerPath): LovelaceViewRawConfig | LovelaceSectionRawConfig;
}
export declare const findLovelaceContainer: FindLovelaceContainer;
export declare const updateLovelaceContainer: (config: LovelaceConfig, path: LovelaceContainerPath, containerConfig: LovelaceViewRawConfig | LovelaceSectionRawConfig) => LovelaceConfig;
interface LovelaceItemKeys {
    cards: LovelaceCardConfig[];
    badges: (Partial<LovelaceBadgeConfig> | string)[];
}
export declare const updateLovelaceItems: <T extends keyof LovelaceItemKeys>(key: T, config: LovelaceConfig, path: LovelaceContainerPath, items: LovelaceItemKeys[T]) => LovelaceConfig;
export declare const findLovelaceItems: <T extends keyof LovelaceItemKeys>(key: T, config: LovelaceConfig, path: LovelaceContainerPath) => LovelaceItemKeys[T] | undefined;
export {};
