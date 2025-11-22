import type { LovelaceHeaderFooterConfig } from "../../header-footer/types";
import type { LovelaceHeaderFooterEditor } from "../../types";
import { HuiTypedElementEditor } from "../hui-typed-element-editor";
export declare class HuiHeaderFooterElementEditor extends HuiTypedElementEditor<LovelaceHeaderFooterConfig> {
    protected getConfigElement(): Promise<LovelaceHeaderFooterEditor | undefined>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-headerfooter-element-editor": HuiHeaderFooterElementEditor;
    }
}
