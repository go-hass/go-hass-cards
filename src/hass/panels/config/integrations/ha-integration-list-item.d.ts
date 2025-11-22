import type { GraphicType } from "@material/mwc-list/mwc-list-item-base";
import { ListItemBase } from "@material/mwc-list/mwc-list-item-base";
import type { CSSResultGroup } from "lit";
import { nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import type { IntegrationListItem } from "./dialog-add-integration";
import "../../../components/ha-svg-icon";
import "../../../components/ha-icon-next";
import "../../../components/ha-tooltip";
export declare class HaIntegrationListItem extends ListItemBase {
    hass: HomeAssistant;
    integration?: IntegrationListItem;
    graphic: GraphicType;
    hasMeta: boolean;
    brand: boolean;
    protected renderSingleLine(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected renderGraphic(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected renderMeta(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-integration-list-item": HaIntegrationListItem;
    }
}
