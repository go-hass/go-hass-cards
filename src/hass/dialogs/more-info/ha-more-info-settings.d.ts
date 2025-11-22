import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-alert";
import "../../panels/config/entities/entity-registry-settings";
import type { HomeAssistant } from "../../types";
export declare class HaMoreInfoSettings extends LitElement {
    hass: HomeAssistant;
    entityId: string;
    private entry?;
    private _settingsElementTag?;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    willUpdate(changedProps: PropertyValues): void;
    private _loadPlatformSettingTabs;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-settings": HaMoreInfoSettings;
    }
}
