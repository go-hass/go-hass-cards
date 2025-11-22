import { LitElement } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-card";
import "../../../../components/ha-icon";
import "../../../../components/ha-spinner";
type SummaryStatus = "success" | "error" | "info" | "warning" | "loading";
declare class HaBackupSummaryCard extends LitElement {
    heading: string;
    description: string;
    hasAction: boolean;
    status: SummaryStatus;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-backup-summary-card": HaBackupSummaryCard;
    }
}
export {};
