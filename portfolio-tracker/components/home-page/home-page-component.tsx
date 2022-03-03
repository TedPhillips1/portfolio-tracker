import HomeTextContentComponent from "../home-text-content/home-text-content-component";
import MarketIndicatorComponent from "../market-indicator/market-indicator-component";
import { HomePage } from "./home-page-styled";

function HomePageComponent() {
  return (
    <HomePage>
      <div className="top-content">
        <HomeTextContentComponent />
        <MarketIndicatorComponent />
      </div>
    </HomePage>
  );
}

export default HomePageComponent;
