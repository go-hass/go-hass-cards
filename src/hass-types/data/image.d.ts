import type { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
interface ImageEntityAttributes extends HassEntityAttributeBase {
    access_token: string;
}
export interface ImageEntity extends HassEntityBase {
    attributes: ImageEntityAttributes;
}
export declare const computeImageUrl: (entity: ImageEntity) => string;
export {};
