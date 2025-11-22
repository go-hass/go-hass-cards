import type { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
interface GroupEntityAttributes extends HassEntityAttributeBase {
    entity_id: string[];
    order: number;
    auto?: boolean;
    view?: boolean;
    control?: "hidden";
}
export interface GroupEntity extends HassEntityBase {
    attributes: GroupEntityAttributes;
}
export declare const computeGroupDomain: (stateObj: GroupEntity) => string | undefined;
export {};
