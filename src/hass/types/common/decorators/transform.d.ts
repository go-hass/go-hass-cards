import type { ReactiveElement } from "lit";
/**
 * Transform function type.
 */
export type Transformer<T = any, V = any> = (value: T) => V | undefined;
/**
 * Specifies a transformer callback that is run when the value of the decorated property, or any of the properties in the watching array, changes.
 * The result of the transformer is assigned to the decorated property.
 * The transformer receives the current as argument.
 */
export declare function transform<T, V>(config: {
    transformer: Transformer<T, V>;
    watch?: PropertyKey[];
}): <ElemClass extends ReactiveElement>(proto: ElemClass, propertyKey: string) => void;
