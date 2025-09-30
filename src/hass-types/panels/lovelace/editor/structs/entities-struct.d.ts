export declare const entitiesConfigStruct: import("superstruct").Struct<string | {
    name: string;
    image: string;
    format: "time" | "total" | "date" | "datetime" | "relative";
    entity: string;
    icon: string;
    state_color: boolean;
    confirmation: boolean | {
        text: string;
        excemptions: {
            user: string;
        }[];
    };
    secondary_info: string;
    tap_action?: any;
    hold_action?: any;
    double_tap_action?: any;
}, null>;
