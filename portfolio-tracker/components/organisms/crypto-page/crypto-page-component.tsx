import BSButtonBarComponent from "../../molecules/bs-button-bar/bs-button-bar-component";
import CSTextContentComponent from "../../molecules/cs-text-content/cs-text-content-component";
import MarketIndicatorComponent from "../../molecules/market-indicator/market-indicator-component";
import { CryptoPage } from "./crypto-page-styled";

function CryptoPageComponent() {
  return (
    <CryptoPage>
      <div className="top-content">
        <div className="column">
          <CSTextContentComponent />
          <BSButtonBarComponent />
        </div>
        <MarketIndicatorComponent />
      </div>
    </CryptoPage>
  );
}

export default CryptoPageComponent;
