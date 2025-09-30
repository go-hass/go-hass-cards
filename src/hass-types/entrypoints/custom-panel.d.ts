declare global {
    interface Window {
        loadES5Adapter: () => Promise<unknown>;
    }
}
export {};
