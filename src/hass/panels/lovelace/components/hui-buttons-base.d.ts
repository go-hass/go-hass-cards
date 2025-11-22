import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/entity/state-badge";
import type { HomeAssistant } from "../../../types";
import type { EntitiesCardEntityConfig } from "../cards/types";
import "../../../components/chips/ha-assist-chip";
import "../../../components/chips/ha-chip-set";
export declare class HuiButtonsBase extends LitElement {
    hass: HomeAssistant;
    configEntities?: EntitiesCardEntityConfig[];
    protected render(): TemplateResult;
    private _handleAction;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-buttons-base": HuiButtonsBase;
    }
}
