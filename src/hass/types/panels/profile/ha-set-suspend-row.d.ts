import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HASSDomEvent } from "../../common/dom/fire_event";
import "../../components/ha-settings-row";
import "../../components/ha-switch";
import type { HomeAssistant } from "../../types";
declare global {
    interface HASSDomEvents {
        "hass-suspend-when-hidden": {
            suspend: HomeAssistant["suspendWhenHidden"];
        };
    }
    interface HTMLElementEventMap {
        "hass-suspend-when-hidden": HASSDomEvent<{
            suspend: HomeAssistant["suspendWhenHidden"];
        }>;
    }
}
declare class HaSetSuspendRow extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    protected render(): TemplateResult;
    private _checkedChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-set-suspend-row": HaSetSuspendRow;
    }
}
export {};
