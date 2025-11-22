import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-icon-button";
import "../../../components/ha-icon-button-prev";
import type { HomeAssistant } from "../../../types";
import "./entity-row-editor/hui-row-element-editor";
import "./feature-editor/hui-card-feature-element-editor";
import "./header-footer-editor/hui-header-footer-element-editor";
import "./heading-badge-editor/hui-heading-badge-element-editor";
import "./hui-form-element-editor";
import "./picture-element-editor/hui-picture-element-element-editor";
import type { SubElementEditorConfig } from "./types";
declare global {
    interface HASSDomEvents {
        "go-back": undefined;
    }
}
export declare class HuiSubElementEditor extends LitElement {
    hass: HomeAssistant;
    config: SubElementEditorConfig;
    schema?: any;
    private _guiModeAvailable;
    private _guiMode;
    private _editorElement?;
    protected render(): TemplateResult;
    private _renderEditor;
    private _goBack;
    private _toggleMode;
    private _handleGUIModeChanged;
    private _handleConfigChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-sub-element-editor": HuiSubElementEditor;
    }
}
