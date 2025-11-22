declare const WrappedElement: CustomElementConstructor;
declare class DateRangePickerElement extends WrappedElement {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        "date-range-picker": DateRangePickerElement;
    }
}
export {};
