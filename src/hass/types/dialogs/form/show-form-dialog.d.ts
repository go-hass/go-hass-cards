import type { HaFormSchema } from "../../components/ha-form/types";
export type FormDialogData = Record<string, any>;
export interface FormDialogParams {
    title: string;
    schema: HaFormSchema[];
    data?: FormDialogData;
    submit?: (data?: FormDialogData) => void;
    cancel?: () => void;
    computeLabel?: (schema: any, data: any) => string | undefined;
    computeHelper?: (schema: any) => string | undefined;
    submitText?: string;
    cancelText?: string;
}
export declare const showFormDialog: (element: HTMLElement, dialogParams: FormDialogParams) => Promise<FormDialogData>;
