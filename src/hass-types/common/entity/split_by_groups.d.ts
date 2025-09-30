import type { HassEntities } from "home-assistant-js-websocket";
import type { GroupEntity } from "../../data/group";
export declare const splitByGroups: (entities: HassEntities) => {
    groups: GroupEntity[];
    ungrouped: HassEntities;
};
