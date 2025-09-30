import { LitElement } from "lit";
import "../../../components/ha-ripple";
export declare class DashboardCard extends LitElement {
    name: string;
    description: string;
    img: string;
    alt: string;
    render(): import("lit-html").TemplateResult<1>;
    private _onKeyDown;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "dashboard-card": DashboardCard;
    }
}
