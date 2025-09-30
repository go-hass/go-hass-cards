import type { HassEntity } from "home-assistant-js-websocket";
import type { TemplateResult } from "lit";
import { nothing } from "lit";
import type { HomeAssistant } from "../../../../../types";
import "../../../../../components/tile/ha-tile-badge";
import "../../../../../components/ha-svg-icon";
export type RenderBadgeFunction = (stateObj: HassEntity, hass: HomeAssistant) => TemplateResult | typeof nothing;
export declare const renderTileBadge: RenderBadgeFunction;
