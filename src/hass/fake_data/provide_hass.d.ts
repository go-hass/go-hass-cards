import type { HassEntities, HassEntity } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
import type { Entity } from "./entity";
type MockRestCallback = (hass: MockHomeAssistant, method: string, path: string, parameters: Record<string, any> | undefined) => any;
export interface MockHomeAssistant extends HomeAssistant {
    mockEntities: any;
    updateHass(obj: Partial<MockHomeAssistant>): any;
    updateStates(newStates: HassEntities): any;
    addEntities(entities: Entity | Entity[], replace?: boolean): any;
    updateTranslations(fragment: null | string, language?: string): any;
    addTranslations(translations: Record<string, string>, language?: string): any;
    mockWS<T extends (...args: any[]) => any = any>(type: string, callback: (msg: any, hass: MockHomeAssistant, onChange?: (response: any) => void) => Awaited<ReturnType<T>>): any;
    mockAPI(path: string | RegExp, callback: MockRestCallback): any;
    mockEvent(event: any): any;
    mockTheme(theme: Record<string, string> | null): any;
    formatEntityState(stateObj: HassEntity, state?: string): string;
    formatEntityAttributeValue(stateObj: HassEntity, attribute: string, value?: any): string;
    formatEntityAttributeName(stateObj: HassEntity, attribute: string): string;
}
export declare const provideHass: (elements: any, overrideData?: Partial<HomeAssistant>) => MockHomeAssistant;
export {};
