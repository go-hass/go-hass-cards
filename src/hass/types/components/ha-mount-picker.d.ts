import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import { SupervisorMountUsage } from "../data/supervisor/mounts";
import type { HomeAssistant } from "../types";
import "./ha-alert";
import "./ha-list-item";
import "./ha-select";
declare class HaMountPicker extends LitElement {
    hass: HomeAssistant;
    label?: string;
    value?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    usage?: SupervisorMountUsage;
    private _mounts?;
    private _error?;
    protected firstUpdated(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _filterMounts;
    private _getMounts;
    private get _value();
    private _mountChanged;
    private _setValue;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-mount-picker": HaMountPicker;
    }
}
export {};
