import type { HomeAssistant } from "../types";
export declare const SENSOR_DEVICE_CLASS_BATTERY = "battery";
export declare const SENSOR_DEVICE_CLASS_TIMESTAMP = "timestamp";
export declare const SENSOR_DEVICE_CLASS_TEMPERATURE = "temperature";
export declare const SENSOR_DEVICE_CLASS_HUMIDITY = "humidity";
export interface SensorDeviceClassUnits {
    units: string[];
}
export declare const getSensorDeviceClassConvertibleUnits: (hass: HomeAssistant, deviceClass: string) => Promise<SensorDeviceClassUnits>;
export interface SensorNumericDeviceClasses {
    numeric_device_classes: string[];
}
export declare const getSensorNumericDeviceClasses: (hass: HomeAssistant) => Promise<SensorNumericDeviceClasses>;
