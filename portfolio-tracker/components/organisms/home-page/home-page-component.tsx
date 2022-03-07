import HomeTextContentComponent from "../../molecules/home-text-content/home-text-content-component";
import MarketIndicatorComponent from "../../molecules/market-indicator/market-indicator-component";
import ValueChartComponent from "../../molecules/value-chart/value-chart-component";
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
