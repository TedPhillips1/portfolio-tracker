import BSButtonBarComponent from "../../molecules/bs-button-bar/bs-button-bar-component";
import CSTextContentComponent from "../../molecules/cs-text-content/cs-text-content-component";
import DisplayTableComponent from "../../molecules/display-table/display-table-component";
import MarketIndicatorComponent from "../../molecules/market-indicator/market-indicator-component";
import { CryptoPage } from "./crypto-page-styled";
import { useState } from "react";
import BuySellFormComponent from "../../molecules/buy-sell-form/buy-sell-form-component";

function CryptoPageComponent() {
  const [form, setForm] = useState(0);

  return (
    <CryptoPage>
      <div className="top-content">
        <div className="column">
          <CSTextContentComponent
            header="Cryptoasset Portfolio"
            value="£5,432.10"
          />
          <BSButtonBarComponent
            disable={form}
            toggleBuy={() => {
              setForm(2);
            }}
            toggleSell={() => {
              setForm(1);
            }}
          />
        </div>
        <MarketIndicatorComponent />
      </div>
      {form === 1 && (
        <BuySellFormComponent
          text="Sell"
          toggleForm={() => {
            setForm(0);
          }}
        />
      )}
      {form === 2 && (
        <BuySellFormComponent
          text="Buy"
          toggleForm={() => {
            setForm(0);
          }}
        />
      )}
      <DisplayTableComponent />
    </CryptoPage>
  );
}

export default CryptoPageComponent;
