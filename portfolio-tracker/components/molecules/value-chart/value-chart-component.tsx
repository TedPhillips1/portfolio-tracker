import ChartComponent from "../../atoms/chart/chart-component";
import MIHeaderComponent from "../../atoms/mi-header/mi-header-component";
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
