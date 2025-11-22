import type { RepairsIssue } from "../../../data/repairs";
export interface RepairsIssueDialogParams {
    issue: RepairsIssue;
    dialogClosedCallback?: () => void;
}
export declare const loadRepairsIssueDialog: () => Promise<typeof import("./dialog-repairs-issue")>;
export declare const showRepairsIssueDialog: (element: HTMLElement, repairsIssueParams: RepairsIssueDialogParams) => void;
