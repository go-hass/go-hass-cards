import type { ReactiveElement } from "lit";
export declare function storage(options: {
    key?: string;
    storage?: "localStorage" | "sessionStorage";
    subscribe?: boolean;
    state?: boolean;
    serializer?: (value: any) => any;
    deserializer?: (value: any) => any;
}): <ElemClass extends ReactiveElement>(proto: ElemClass, propertyKey: string) => void;
