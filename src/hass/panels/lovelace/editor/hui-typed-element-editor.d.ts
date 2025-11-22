import { HuiElementEditor } from "./hui-element-editor";
export declare abstract class HuiTypedElementEditor<T extends object, C = any> extends HuiElementEditor<T, C> {
    private _configElementType?;
    protected get configElementType(): string | undefined;
    protected loadConfigElement(): Promise<void>;
}
