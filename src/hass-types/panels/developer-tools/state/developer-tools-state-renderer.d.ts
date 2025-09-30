import type { HassEntity } from "home-assistant-js-websocket";
import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-checkbox";
import "../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../types";
declare class HaPanelDevStateRenderer extends LitElement {
    hass: HomeAssistant;
    entities: HassEntity[];
    narrow: boolean;
    virtualize: boolean;
    showAttributes: boolean;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected shouldUpdate(changedProps: PropertyValues<this>): boolean;
    protected render(): TemplateResult<1>;
    private _renderStateItem;
    private _formatAttributeValue;
    private _attributeString;
    private _copyEntity;
    private _entityMoreInfo;
    private _entitySelected;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "developer-tools-state-renderer": HaPanelDevStateRenderer;
    }
    interface HASSDomEvents {
        "states-tool-entity-selected": {
            entity: Partial<HassEntity>;
        };
    }
}
export {};
