import type { EntityFilter, EntityFilterFunc } from "../../../../../common/entity/entity_filter";
import type { LocalizeFunc } from "../../../../../common/translations/localize";
export declare const HOME_SUMMARIES: readonly ["lights", "climate", "security", "media_players"];
export type HomeSummary = (typeof HOME_SUMMARIES)[number];
export declare const HOME_SUMMARIES_ICONS: Record<HomeSummary, string>;
export declare const HOME_SUMMARIES_FILTERS: Record<HomeSummary, EntityFilter[]>;
export declare const findEntities: (entities: string[], filters: EntityFilterFunc[]) => string[];
export declare const getSummaryLabel: (localize: LocalizeFunc, summary: HomeSummary) => string;
