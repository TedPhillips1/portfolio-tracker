import { StockPage } from "./stock-page-styled";
import BSButtonBarComponent from "../../molecules/bs-button-bar/bs-button-bar-component";
import CSTextContentComponent from "../../molecules/cs-text-content/cs-text-content-component";
import DisplayTableComponent from "../../molecules/display-table/display-table-component";
import MarketIndicatorComponent from "../../molecules/market-indicator/market-indicator-component";

function StockPageComponent() {
  return (
    <StockPage>
      <div className="top-content">
        <div className="column">
          <CSTextContentComponent header="Stock Portfolio" value="£5,432.10" />
          <BSButtonBarComponent />
        </div>
        <MarketIndicatorComponent />
      </div>
      <DisplayTableComponent />
    </StockPage>
  );
}

export default StockPageComponent;
