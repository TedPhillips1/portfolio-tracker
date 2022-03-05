import ChartComponent from "../chart/chart-component";
import MIHeaderComponent from "../mi-header/mi-header-component";
import { ValueChart } from "./value-chart-styled";

function ValueChartComponent() {
  return (
    <ValueChart>
      <MIHeaderComponent text="Total Value over Time" />
      <ChartComponent />
    </ValueChart>
  );
}
export default ValueChartComponent;
