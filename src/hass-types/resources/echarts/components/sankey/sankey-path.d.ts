export interface SankeyPathShape {
    x: number;
    y: number;
    dx: number;
    dy: number;
    targets: {
        x: number;
        y: number;
        type: "curveHorizontal" | "curveVertical" | "line";
    }[];
}
export declare function buildPath(ctx: CanvasRenderingContext2D, shape: SankeyPathShape, curveness: number): void;
