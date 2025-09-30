import type { EntityHeadingBadgeConfig } from "../../heading-badges/types";
import type { LovelaceConfigForm, LovelaceHeadingBadgeEditor } from "../../types";
import { HuiTypedElementEditor } from "../hui-typed-element-editor";
export declare class HuiHeadingEntityElementEditor extends HuiTypedElementEditor<EntityHeadingBadgeConfig> {
    protected get configElementType(): string | undefined;
    protected getConfigElement(): Promise<LovelaceHeadingBadgeEditor | undefined>;
    protected getConfigForm(): Promise<LovelaceConfigForm | undefined>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-heading-badge-element-editor": HuiHeadingEntityElementEditor;
    }
}
