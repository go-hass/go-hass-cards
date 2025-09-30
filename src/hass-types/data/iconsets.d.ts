export type Icons = Record<string, string>;
export type Chunks = Record<string, Promise<Icons>>;
export declare const MDI_PREFIXES: string[];
export declare const getIcon: (iconName: string) => Promise<string>;
export declare const findIconChunk: (icon: string) => string;
export declare const writeCache: (chunks: Chunks) => Promise<void>;
