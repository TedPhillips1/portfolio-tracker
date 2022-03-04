import HomeTextContentComponent from "../home-text-content/home-text-content-component";
import MarketIndicatorComponent from "../market-indicator/market-indicator-component";
import ValueChartComponent from "../value-chart/value-chart-component";
import { HomePage } from "./home-page-styled";

function HomePageComponent() {
  return (
    <HomePage>
      <div className="top-content">
        <HomeTextContentComponent />
        <MarketIndicatorComponent />
      </div>
      <ValueChartComponent />
    </HomePage>
  );
}

export default HomePageComponent;
