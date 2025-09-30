import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { LocalizeFunc } from "../common/translations/localize";
import "../components/ha-icon-button-arrow-prev";
import "../components/ha-menu-button";
import "../components/ha-svg-icon";
import "../components/ha-tab";
import type { HomeAssistant, Route } from "../types";
export interface PageNavigation {
    path: string;
    translationKey?: string;
    component?: string | string[];
    name?: string;
    not_component?: string | string[];
    core?: boolean;
    advancedOnly?: boolean;
    iconPath?: string;
    description?: string;
    iconColor?: string;
    info?: any;
}
declare class HassTabsSubpage extends LitElement {
    hass: HomeAssistant;
    supervisor: boolean;
    localizeFunc?: LocalizeFunc;
    backPath?: string;
    backCallback?: () => void;
    mainPage: boolean;
    route: Route;
    tabs: PageNavigation[];
    narrow: boolean;
    isWide: boolean;
    pane: boolean;
    /**
     * Do we need to add padding for a fab.
     * @type {Boolean}
     */
    hasFab: boolean;
    private _activeTab?;
    private _savedScrollPos?;
    private _getTabs;
    willUpdate(changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    private _saveScrollPos;
    private _backTapped;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hass-tabs-subpage": HassTabsSubpage;
    }
}
export {};
