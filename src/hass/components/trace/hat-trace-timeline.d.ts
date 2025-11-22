import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import type { EntityRegistryEntry } from "../../data/entity_registry";
import type { FloorRegistryEntry } from "../../data/floor_registry";
import type { LabelRegistryEntry } from "../../data/label_registry";
import type { LogbookEntry } from "../../data/logbook";
import type { AutomationTraceExtended } from "../../data/trace";
import type { HomeAssistant } from "../../types";
import "./ha-timeline";
export declare class HaAutomationTracer extends LitElement {
    hass: HomeAssistant;
    trace?: AutomationTraceExtended;
    logbookEntries?: LogbookEntry[];
    selectedPath?: string;
    allowPick: boolean;
    _entityReg: EntityRegistryEntry[];
    _labelReg: LabelRegistryEntry[];
    _floorReg: Record<string, FloorRegistryEntry>;
    protected render(): TemplateResult<1> | typeof nothing;
    protected updated(props: PropertyValues): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hat-trace-timeline": HaAutomationTracer;
    }
}
