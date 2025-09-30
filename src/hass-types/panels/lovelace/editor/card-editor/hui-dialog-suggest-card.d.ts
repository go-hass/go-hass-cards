import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-yaml-editor";
import "../../../../components/ha-spinner";
import type { HomeAssistant } from "../../../../types";
import "../../cards/hui-card";
import "../../sections/hui-section";
import type { SuggestCardDialogParams } from "./show-suggest-card-dialog";
export declare class HuiDialogSuggestCard extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _cardConfig?;
    private _sectionConfig?;
    private _saving;
    private _yamlEditor?;
    showDialog(params: SuggestCardDialogParams): void;
    closeDialog(): void;
    private get _viewSupportsSection();
    private _renderPreview;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): CSSResultGroup;
    private _pickCard;
    private _computeNewConfig;
    private _save;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-suggest-card": HuiDialogSuggestCard;
    }
}
