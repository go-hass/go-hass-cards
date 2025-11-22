import type { LocalizeFunc } from "../../common/translations/localize";
export declare const loadAppDialog: () => Promise<typeof import("./app-dialog")>;
export declare const showAppDialog: (element: HTMLElement, params: {
    localize: LocalizeFunc;
}) => void;
