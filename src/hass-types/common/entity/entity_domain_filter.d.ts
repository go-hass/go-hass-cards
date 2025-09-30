export type EntityDomainFilterFunc = (entityId: string) => boolean;
export interface EntityDomainFilter {
    include_domains: string[];
    include_entities: string[];
    exclude_domains: string[];
    exclude_entities: string[];
}
export declare const isEmptyEntityDomainFilter: (filter: EntityDomainFilter) => boolean;
export declare const generateEntityDomainFilter: (includeDomains?: string[], includeEntities?: string[], excludeDomains?: string[], excludeEntities?: string[]) => EntityDomainFilterFunc;
