import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-attribute-value";
import "../../../components/ha-card";
import "../../../components/ha-icon";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceGridOptions } from "../types";
import type { EntityCardConfig } from "./types";
export declare class HuiEntityCard extends LitElement implements LovelaceCard {
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFill: string[]): {
        entity: any;
    };
    static getConfigForm(): Promise<import("../types").LovelaceConfigForm>;
    hass?: HomeAssistant;
    layout?: string;
    private _config?;
    private _footerElement?;
    private _getStateColor;
    setConfig(config: EntityCardConfig): void;
    getCardSize(): Promise<number>;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _computeColor;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected updated(changedProps: PropertyValues): void;
    private _handleClick;
    getGridOptions(): LovelaceGridOptions;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-entity-card": HuiEntityCard;
    }
}
