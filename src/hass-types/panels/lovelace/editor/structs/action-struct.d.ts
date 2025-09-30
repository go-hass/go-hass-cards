export declare const actionConfigStructConfirmation: import("superstruct").Struct<boolean | {
    text: string;
    excemptions: {
        user: string;
    }[];
}, null>;
export declare const actionConfigStructType: import("superstruct").Struct<{
    action: "none" | "url" | "navigate" | "toggle" | "call-service" | "perform-action" | "more-info" | "assist";
    confirmation: boolean | {
        text: string;
        excemptions: {
            user: string;
        }[];
    };
}, {
    action: import("superstruct").Struct<"none" | "url" | "navigate" | "toggle" | "call-service" | "perform-action" | "more-info" | "assist", {
        none: "none";
        url: "url";
        navigate: "navigate";
        toggle: "toggle";
        "call-service": "call-service";
        "perform-action": "perform-action";
        "more-info": "more-info";
        assist: "assist";
    }>;
    confirmation: import("superstruct").Struct<boolean | {
        text: string;
        excemptions: {
            user: string;
        }[];
    }, null>;
}>;
export declare const actionConfigStruct: import("superstruct").Struct<any, null>;
