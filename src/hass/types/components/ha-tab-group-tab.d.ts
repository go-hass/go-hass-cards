import Tab from "@home-assistant/webawesome/dist/components/tab/tab";
import { type CSSResultGroup } from "lit";
export declare class HaTabGroupTab extends Tab {
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tab-group-tab": HaTabGroupTab;
    }
}
