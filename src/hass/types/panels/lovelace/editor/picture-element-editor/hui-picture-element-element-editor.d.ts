import type { LovelaceElementConfig } from "../../elements/types";
import type { LovelacePictureElementEditor } from "../../types";
import { HuiTypedElementEditor } from "../hui-typed-element-editor";
export declare class HuiPictureElementElementEditor extends HuiTypedElementEditor<LovelaceElementConfig> {
    protected get configElementType(): string | undefined;
    protected getConfigElement(): Promise<LovelacePictureElementEditor | undefined>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-picture-element-element-editor": HuiPictureElementElementEditor;
    }
}
