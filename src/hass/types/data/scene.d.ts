import type { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
import type { HomeAssistant, ServiceCallResponse } from "../types";
export declare const SCENE_IGNORED_DOMAINS: string[];
export declare const showSceneEditor: (config?: Partial<SceneConfig>, areaId?: string) => void;
export declare const getSceneEditorInitData: () => {
    config?: Partial<SceneConfig>;
    areaId?: string;
};
export interface SceneEntity extends HassEntityBase {
    attributes: HassEntityAttributeBase & {
        id?: string;
    };
}
export interface SceneConfig {
    id?: string;
    name: string;
    icon?: string;
    entities: SceneEntities;
    metadata?: SceneMetaData;
}
export type SceneEntities = Record<string, string | {
    state: string;
    [key: string]: any;
}>;
export type SceneMetaData = Record<string, {
    entity_only?: boolean | undefined;
}>;
export declare const activateScene: (hass: HomeAssistant, entityId: string) => Promise<ServiceCallResponse>;
export declare const applyScene: (hass: HomeAssistant, entities: SceneEntities) => Promise<ServiceCallResponse>;
export declare const getSceneConfig: (hass: HomeAssistant, sceneId: string) => Promise<SceneConfig>;
export declare const saveScene: (hass: HomeAssistant, sceneId: string, config: SceneConfig) => Promise<unknown>;
export declare const deleteScene: (hass: HomeAssistant, id: string) => Promise<unknown>;
