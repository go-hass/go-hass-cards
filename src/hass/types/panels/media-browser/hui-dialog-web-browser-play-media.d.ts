import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-hls-player";
import type { HomeAssistant } from "../../types";
import type { WebBrowserPlayMediaDialogParams } from "./show-media-player-dialog";
export declare class HuiDialogWebBrowserPlayMedia extends LitElement {
    hass: HomeAssistant;
    private _params?;
    showDialog(params: WebBrowserPlayMediaDialogParams): void;
    closeDialog(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-web-browser-play-media": HuiDialogWebBrowserPlayMedia;
    }
}
