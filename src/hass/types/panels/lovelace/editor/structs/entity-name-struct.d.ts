export declare const entityNameStruct: import("superstruct").Struct<string | {
    type: "text";
    text: string;
} | {
    type: "area" | "floor" | "entity" | "device";
} | (string | {
    type: "text";
    text: string;
} | {
    type: "area" | "floor" | "entity" | "device";
})[], null>;
