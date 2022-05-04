import BSButtonBarComponent from "../../molecules/bs-button-bar/bs-button-bar-component";
import CSTextContentComponent from "../../molecules/cs-text-content/cs-text-content-component";
import DisplayTableComponent from "../../molecules/display-table/display-table-component";
import MarketIndicatorComponent from "../../molecules/market-indicator/market-indicator-component";
import { CryptoPage } from "./crypto-page-styled";

function CryptoPageComponent() {
  return (
    <CryptoPage>
      <div className="top-content">
        <div className="column">
          <CSTextContentComponent
            header="Cryptoasset Portfolio"
            value="£5,432.10"
          />
          <BSButtonBarComponent />
        </div>
        <MarketIndicatorComponent />
      </div>
      <DisplayTableComponent />
    </CryptoPage>
  );
}

export default CryptoPageComponent;
