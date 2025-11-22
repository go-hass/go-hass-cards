import type { MarkedOptions } from "marked";
declare const api: {
    renderMarkdown: (content: string, markedOptions: MarkedOptions, hassOptions?: {
        allowSvg?: boolean;
        allowDataUrl?: boolean;
    }) => Promise<string>;
};
export type Api = typeof api;
export {};
