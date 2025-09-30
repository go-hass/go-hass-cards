import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-menu-button";
import "../../components/ha-icon-button-arrow-prev";
import "../../components/ha-list-item";
import "../../components/ha-top-app-bar-fixed";
import type { HomeAssistant } from "../../types";
import "../lovelace/components/hui-energy-period-selector";
import "../lovelace/views/hui-view";
import "../lovelace/views/hui-view-container";
declare class PanelEnergy extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _viewIndex;
    private _lovelace?;
    private _searchParms;
    willUpdate(changedProps: PropertyValues): void;
    private _back;
    protected render(): TemplateResult;
    private _setLovelace;
    private _navigateConfig;
    private _dumpCSV;
    private _reloadView;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-energy": PanelEnergy;
    }
}
declare global {
    interface HASSDomEvents {
        "reload-energy-panel": undefined;
    }
}
export {};
