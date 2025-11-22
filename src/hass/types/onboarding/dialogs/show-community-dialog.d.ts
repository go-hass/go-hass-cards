import type { LocalizeFunc } from "../../common/translations/localize";
export declare const loadCommunityDialog: () => Promise<typeof import("./community-dialog")>;
export declare const showCommunityDialog: (element: HTMLElement, params: {
    localize: LocalizeFunc;
}) => void;
