export declare const entitiesConfigStruct: import("superstruct").Struct<string | {
    name: string | {
        type: "text";
        text: string;
    } | {
        type: "area" | "floor" | "entity" | "device";
    } | (string | {
        type: "text";
        text: string;
    } | {
        type: "area" | "floor" | "entity" | "device";
    })[];
    image: string;
    format: "time" | "total" | "date" | "datetime" | "relative";
    entity: string;
    icon: string;
    confirmation: boolean | {
        text: string;
        excemptions: {
            user: string;
        }[];
    };
    show_state: boolean;
    state_color: boolean;
    secondary_info: string;
    show_last_changed: boolean;
    tap_action?: any;
    hold_action?: any;
    double_tap_action?: any;
}, null>;
