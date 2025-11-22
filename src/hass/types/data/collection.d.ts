import type { Collection, Connection, UnsubscribeFunc } from "home-assistant-js-websocket";
import type { Store } from "home-assistant-js-websocket/dist/store";
interface OptimisticCollection<T> extends Collection<T> {
    save(data: T): Promise<unknown>;
}
/**
 * Create an optimistic collection that includes a save function.
 * When the collection is saved, the collection is optimistically updated.
 * The update is reversed when the update failed.
 */
export declare const getOptimisticCollection: <StateType>(saveCollection: (conn2: Connection, data: StateType) => Promise<unknown>, conn: Connection, key: string, fetchCollection: (conn2: Connection) => Promise<StateType>, subscribeUpdates?: (conn2: Connection, store: Store<StateType>) => Promise<UnsubscribeFunc>) => OptimisticCollection<StateType>;
export {};
