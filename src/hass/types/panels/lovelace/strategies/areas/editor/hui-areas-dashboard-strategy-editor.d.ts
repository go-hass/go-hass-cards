import { LitElement } from "lit";
import "../../../../../components/ha-areas-display-editor";
import "../../../../../components/ha-areas-floors-display-editor";
import "../../../../../components/ha-entities-display-editor";
import "../../../../../components/ha-icon";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-icon-button-prev";
import "../../../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../../../types";
import type { LovelaceStrategyEditor } from "../../types";
import type { AreasDashboardStrategyConfig } from "../areas-dashboard-strategy";
export declare class HuiAreasDashboardStrategyEditor extends LitElement implements LovelaceStrategyEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: AreasDashboardStrategyConfig): void;
    private _area?;
    protected render(): import("lit-html/directive").DirectiveResult<typeof import("lit-html/directives/cache").CacheDirective>;
    private _renderOverviewEditor;
    private _renderAreaEditor;
    private _areasActionsButtonsRenderer;
    private _toggleAreaLargeCard;
    private _back;
    private _areasFloorsDisplayValue;
    private _editArea;
    private _handleAreaNavigate;
    private _areasFloorsDisplayChanged;
    private _entitiesDisplayChanged;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-areas-dashboard-strategy-editor": HuiAreasDashboardStrategyEditor;
    }
}
