import CSTextContentComponent from "../../molecules/cs-text-content/cs-text-content-component";
import MarketIndicatorComponent from "../../molecules/market-indicator/market-indicator-component";
import { CryptoPage } from "./crypto-page-styled";

function CryptoPageComponent() {
  return (
    <CryptoPage>
      <div className="top-content">
        <CSTextContentComponent />
        <MarketIndicatorComponent />
      </div>
    </CryptoPage>
  );
}

export default CryptoPageComponent;
