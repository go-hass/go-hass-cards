import { LitElement } from "lit";
import type { HomeAssistant } from "../../../types";
import type { RepairsIssue } from "../../../data/repairs";
declare class DialogRepairsIssueSubtitle extends LitElement {
    hass: HomeAssistant;
    issue: RepairsIssue;
    protected firstUpdated(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-repairs-issue-subtitle": DialogRepairsIssueSubtitle;
    }
}
export {};
