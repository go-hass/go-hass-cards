import type GlobalModel from "echarts/types/src/model/Global";
import type { GraphNode, GraphEdge } from "echarts/types/src/data/Graph";
import type ExtensionAPI from "echarts/types/src/core/ExtensionAPI";
interface PassThroughNode {
    passThrough: boolean;
    id: string;
    value: number;
    depth: number;
}
type Node = GraphNode | PassThroughNode;
interface SectionNode {
    node: Node;
    id: string;
    value: number;
    x: number;
    y: number;
    dx: number;
    dy: number;
    size: number;
}
export declare function isPassThroughNode(node: Node): node is PassThroughNode;
interface CoordinateSystem {
    breadth: "x" | "y";
    depth: "x" | "y";
    breadthSize: "dx" | "dy";
    depthSize: "dx" | "dy";
}
export declare function getCoordinateSystem(orient: "vertical" | "horizontal"): CoordinateSystem;
export default function sankeyLayout(ecModel: GlobalModel, _api: ExtensionAPI): void;
export declare function getNodeDepthInfo(node: GraphNode, depths: number[]): {
    depth: number;
    depthIndex: number;
};
export declare function getEdgeValue(edge: GraphEdge): number;
export declare function getPassThroughSections(sourceDepthIndex: number, targetDepthIndex: number, depths: number[]): number[];
export declare function createPassThroughNode(sourceId: string, targetId: string, depth: number, value: number): PassThroughNode;
export declare function groupNodesBySection(nodes: GraphNode[], passThroughNodes: PassThroughNode[]): Record<number, Node[]>;
export declare function createSectionNodes(nodes: Node[]): SectionNode[];
export declare function calculateSectionDimensions(orient: "vertical" | "horizontal", width: number, height: number, depths: number[], nodeGap: number): {
    sectionSize: number;
    sectionDepthSize: number;
};
export declare function setNodeSizes(nodes: SectionNode[], availableSpace: number, totalValue: number, prevValueToSizeRatio?: number): {
    nodes: SectionNode[];
    valueToSizeRatio: number;
};
export {};
