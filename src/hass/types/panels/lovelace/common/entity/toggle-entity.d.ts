import type { HomeAssistant, ServiceCallResponse } from "../../../../types";
export declare const toggleEntity: (hass: HomeAssistant, entityId: string) => Promise<ServiceCallResponse>;
