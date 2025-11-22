import type { ExtEntityRegistryEntry } from "../../../../data/entity_registry";
import type { LightColor } from "../../../../data/light";
export interface LightColorFavoriteDialogParams {
    entry: ExtEntityRegistryEntry;
    title: string;
    initialColor?: LightColor;
    submit?: (color?: LightColor) => void;
    cancel?: () => void;
}
export declare const loadLightColorFavoriteDialog: () => Promise<typeof import("./dialog-light-color-favorite")>;
export declare const showLightColorFavoriteDialog: (element: HTMLElement, dialogParams: LightColorFavoriteDialogParams) => Promise<LightColor>;
