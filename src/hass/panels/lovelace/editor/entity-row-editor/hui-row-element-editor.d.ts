import type { LovelaceRowConfig } from "../../entity-rows/types";
import type { LovelaceRowEditor } from "../../types";
import { HuiTypedElementEditor } from "../hui-typed-element-editor";
import "../config-elements/hui-generic-entity-row-editor";
export declare class HuiRowElementEditor extends HuiTypedElementEditor<LovelaceRowConfig> {
    protected get configElementType(): string | undefined;
    protected getConfigElement(): Promise<LovelaceRowEditor | undefined>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-row-element-editor": HuiRowElementEditor;
    }
}
