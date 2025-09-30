export declare const HELPERS_CRUD: {
    input_boolean: {
        fetch: (hass: import("../types").HomeAssistant) => Promise<import("./input_boolean").InputBoolean[]>;
        update: (hass: import("../types").HomeAssistant, id: string, updates: Partial<import("./input_boolean").InputBooleanMutableParams>) => Promise<import("./input_boolean").InputBoolean>;
        delete: (hass: import("../types").HomeAssistant, id: string) => Promise<unknown>;
    };
    input_button: {
        fetch: (hass: import("../types").HomeAssistant) => Promise<import("./input_button").InputButton[]>;
        update: (hass: import("../types").HomeAssistant, id: string, updates: Partial<import("./input_button").InputButtonMutableParams>) => Promise<import("./input_button").InputButton>;
        delete: (hass: import("../types").HomeAssistant, id: string) => Promise<unknown>;
    };
    input_text: {
        fetch: (hass: import("../types").HomeAssistant) => Promise<import("./input_text").InputText[]>;
        update: (hass: import("../types").HomeAssistant, id: string, updates: Partial<import("./input_text").InputTextMutableParams>) => Promise<import("./input_text").InputText>;
        delete: (hass: import("../types").HomeAssistant, id: string) => Promise<unknown>;
    };
    input_number: {
        fetch: (hass: import("../types").HomeAssistant) => Promise<import("./input_number").InputNumber[]>;
        update: (hass: import("../types").HomeAssistant, id: string, updates: Partial<import("./input_number").InputNumberMutableParams>) => Promise<import("./input_number").InputNumber>;
        delete: (hass: import("../types").HomeAssistant, id: string) => Promise<unknown>;
    };
    input_datetime: {
        fetch: (hass: import("../types").HomeAssistant) => Promise<import("./input_datetime").InputDateTime[]>;
        update: (hass: import("../types").HomeAssistant, id: string, updates: Partial<import("./input_datetime").InputDateTimeMutableParams>) => Promise<import("./input_datetime").InputDateTime>;
        delete: (hass: import("../types").HomeAssistant, id: string) => Promise<unknown>;
    };
    input_select: {
        fetch: (hass: import("../types").HomeAssistant) => Promise<import("./input_select").InputSelect[]>;
        update: (hass: import("../types").HomeAssistant, id: string, updates: Partial<import("./input_select").InputSelectMutableParams>) => Promise<import("./input_select").InputSelect>;
        delete: (hass: import("../types").HomeAssistant, id: string) => Promise<unknown>;
    };
    counter: {
        fetch: (hass: import("../types").HomeAssistant) => Promise<import("./counter").Counter[]>;
        update: (hass: import("../types").HomeAssistant, id: string, updates: Partial<import("./counter").CounterMutableParams>) => Promise<import("./counter").Counter>;
        delete: (hass: import("../types").HomeAssistant, id: string) => Promise<unknown>;
    };
    timer: {
        fetch: (hass: import("../types").HomeAssistant) => Promise<import("./timer").Timer[]>;
        update: (hass: import("../types").HomeAssistant, id: string, updates: Partial<import("./timer").TimerMutableParams>) => Promise<import("./timer").Timer>;
        delete: (hass: import("../types").HomeAssistant, id: string) => Promise<unknown>;
    };
    schedule: {
        fetch: (hass: import("../types").HomeAssistant) => Promise<import("./schedule").Schedule[]>;
        update: (hass: import("../types").HomeAssistant, id: string, updates: Partial<import("./schedule").ScheduleMutableParams>) => Promise<import("./schedule").Schedule>;
        delete: (hass: import("../types").HomeAssistant, id: string) => Promise<unknown>;
    };
};
