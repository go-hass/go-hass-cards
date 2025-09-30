import type { Api } from "./markdown-worker";
type RenderMarkdownType = Api["renderMarkdown"];
type RenderMarkdownParamTypes = Parameters<RenderMarkdownType>;
export declare const renderMarkdown: (content: RenderMarkdownParamTypes[0], markedOptions: RenderMarkdownParamTypes[1], hassOptions?: RenderMarkdownParamTypes[2]) => Promise<ReturnType<RenderMarkdownType>>;
export {};
