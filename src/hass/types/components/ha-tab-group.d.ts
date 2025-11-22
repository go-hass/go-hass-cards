import TabGroup from "@home-assistant/webawesome/dist/components/tab-group/tab-group";
import { type CSSResultGroup } from "lit";
export declare class HaTabGroup extends TabGroup {
    private _dragScrollController;
    tabTag: string;
    tabOnly: boolean;
    protected handleClick(event: MouseEvent): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tab-group": HaTabGroup;
    }
}
