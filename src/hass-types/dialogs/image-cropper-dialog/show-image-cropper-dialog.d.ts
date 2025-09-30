export interface CropOptions {
    round: boolean;
    type?: "image/jpeg" | "image/png";
    quality?: number;
    aspectRatio?: number;
}
export interface HaImageCropperDialogParams {
    file: File;
    options: CropOptions;
    croppedCallback: (file: File) => void;
}
export declare const showImageCropperDialog: (element: HTMLElement, dialogParams: HaImageCropperDialogParams) => void;
