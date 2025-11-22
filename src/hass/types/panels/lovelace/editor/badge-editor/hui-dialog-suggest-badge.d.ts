import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-yaml-editor";
import "../../../../components/ha-button";
import type { HomeAssistant } from "../../../../types";
import "../../badges/hui-badge";
import type { SuggestBadgeDialogParams } from "./show-suggest-badge-dialog";
export declare class HuiDialogSuggestBadge extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _badgeConfig?;
    private _saving;
    private _yamlEditor?;
    showDialog(params: SuggestBadgeDialogParams): void;
    closeDialog(): void;
    private _renderPreview;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): CSSResultGroup;
    private _computeNewConfig;
    private _save;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-suggest-badge": HuiDialogSuggestBadge;
    }
}
