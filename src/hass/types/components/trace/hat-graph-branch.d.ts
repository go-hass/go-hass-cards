import { LitElement } from "lit";
interface BranchConfig {
    x: number;
    height: number;
    start: boolean;
    end: boolean;
    track: boolean;
}
/**
 * @attribute active
 * @attribute track
 */
export declare class HatGraphBranch extends LitElement {
    disabled: boolean;
    selected: boolean;
    start: boolean;
    short: boolean;
    _branches: BranchConfig[];
    private _totalWidth;
    private _maxHeight;
    private _updateBranches;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hat-graph-branch": HatGraphBranch;
    }
}
export {};
