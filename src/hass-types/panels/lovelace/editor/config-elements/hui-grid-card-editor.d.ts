import type { HaFormSchema, SchemaUnion } from "../../../../components/ha-form/types";
import type { GridCardConfig } from "../../cards/types";
import { HuiStackCardEditor } from "./hui-stack-card-editor";
declare const SCHEMA: readonly [{
    readonly type: "grid";
    readonly name: "";
    readonly schema: readonly [{
        readonly name: "title";
        readonly selector: {
            readonly text: {};
        };
    }, {
        readonly name: "columns";
        readonly default: 3;
        readonly selector: {
            readonly number: {
                readonly min: 1;
                readonly mode: "box";
            };
        };
    }, {
        readonly name: "square";
        readonly selector: {
            readonly boolean: {};
        };
    }];
}];
export declare class HuiGridCardEditor extends HuiStackCardEditor {
    protected _schema: readonly HaFormSchema[];
    setConfig(config: Readonly<GridCardConfig>): void;
    protected formData(): object;
    protected _computeLabelCallback: (schema: SchemaUnion<typeof SCHEMA>) => string;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-grid-card-editor": HuiGridCardEditor;
    }
}
export {};
