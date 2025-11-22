import type { HomeAssistant } from "../../types";
/**
 * Call a function with result caching per entity.
 * @param cacheKey key to store the cache on hass object
 * @param cacheTime time to cache the results
 * @param func function to fetch the data
 * @param hass Home Assistant object
 * @param entityId entity to fetch data for
 * @param args extra arguments to pass to the function to fetch the data
 * @returns
 */
export declare const timeCacheEntityPromiseFunc: <T>(cacheKey: string, cacheTime: number, func: (hass: HomeAssistant, entityId: string, ...args: any[]) => Promise<T>, hass: HomeAssistant, entityId: string, ...args: any[]) => Promise<T>;
