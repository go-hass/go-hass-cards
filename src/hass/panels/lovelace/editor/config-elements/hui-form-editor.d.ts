import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import type { LocalizeFunc } from "../../../../common/translations/localize";
import "../../../../components/ha-form/ha-form";
import type { HaFormSchema } from "../../../../components/ha-form/types";
import type { LovelaceCardConfig } from "../../../../data/lovelace/config/card";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceGenericElementEditor } from "../../types";
export declare class HuiFormEditor extends LitElement implements LovelaceGenericElementEditor {
    hass: HomeAssistant;
    schema: HaFormSchema[];
    private _config?;
    assertConfig(_config: LovelaceCardConfig): void;
    setConfig(config: LovelaceCardConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    computeLabel: (_schema: HaFormSchema, _localize: LocalizeFunc) => string | undefined;
    computeHelper: (_schema: HaFormSchema, _localize: LocalizeFunc) => string | undefined;
    private _computeLabelCallback;
    private _computeHelperCallback;
    private _valueChanged;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-form-editor": HuiFormEditor;
    }
}
