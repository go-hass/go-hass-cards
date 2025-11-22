import EchartsSankeyView from "echarts/lib/chart/sankey/SankeyView";
import type GlobalModel from "echarts/types/src/model/Global";
import type SankeySeriesModel from "echarts/types/src/chart/sankey/SankeySeries";
import type ExtensionAPI from "echarts/types/src/core/ExtensionAPI";
declare class SankeyView extends EchartsSankeyView {
    render(seriesModel: SankeySeriesModel, ecModel: GlobalModel, api: ExtensionAPI): void;
}
export default SankeyView;
