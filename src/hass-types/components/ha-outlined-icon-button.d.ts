import { IconButton } from "@material/web/iconbutton/internal/icon-button";
export declare class HaOutlinedIconButton extends IconButton {
    protected getRenderClasses(): {
        outlined: boolean;
        'flip-icon': boolean;
        selected: boolean;
    };
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-outlined-icon-button": HaOutlinedIconButton;
    }
}
