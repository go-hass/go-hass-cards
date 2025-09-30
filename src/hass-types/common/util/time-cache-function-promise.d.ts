import type { HomeAssistant } from "../../types";
/**
 * Caches a result of a promise for X time. Allows optional extra validation
 * check to invalidate the cache.
 * @param cacheKey the key to store the cache
 * @param cacheTime the time to cache the result
 * @param func the function to fetch the data
 * @param generateCacheKey optional function to generate a cache key based on current hass + cached result. Cache is invalid if generates a different cache key.
 * @param hass Home Assistant object
 * @param args extra arguments to pass to the function to fetch the data
 * @returns
 */
export declare const timeCachePromiseFunc: <T>(cacheKey: string, cacheTime: number, func: (hass: HomeAssistant, ...args: any[]) => Promise<T>, generateCacheKey: ((hass: HomeAssistant, lastResult: T) => unknown) | undefined, hass: HomeAssistant, ...args: any[]) => Promise<T>;
