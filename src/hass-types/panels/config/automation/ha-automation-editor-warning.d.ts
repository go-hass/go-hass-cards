import { LitElement } from "lit";
import type { LocalizeFunc } from "../../../common/translations/localize";
import "../../../components/ha-alert";
export declare class HaAutomationEditorWarning extends LitElement {
    localize: LocalizeFunc;
    alertTitle?: string;
    warnings: string[];
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-editor-warning": HaAutomationEditorWarning;
    }
}
