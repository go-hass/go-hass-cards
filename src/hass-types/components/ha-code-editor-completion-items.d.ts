import { LitElement } from "lit";
export interface CompletionItem {
    label: string;
    value: string;
    subValue?: string;
}
export declare class HaCodeEditorCompletionItems extends LitElement {
    items: CompletionItem[];
    render(): import("lit-html").TemplateResult<1>[];
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-code-editor-completion-items": HaCodeEditorCompletionItems;
    }
}
