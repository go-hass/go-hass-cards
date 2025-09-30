import WaAnimation from "@home-assistant/webawesome/dist/components/animation/animation";
export declare class HaFadeIn extends WaAnimation {
    name: string;
    fill: FillMode;
    play: boolean;
    iterations: number;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-fade-in": HaFadeIn;
    }
}
