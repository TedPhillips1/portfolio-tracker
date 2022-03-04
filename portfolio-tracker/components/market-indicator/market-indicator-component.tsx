import MIHeaderComponent from "../mi-header/mi-header-component";
import MIFullComponent from "../mi-price/mi-price-component";
import { MarketIndicator } from "./market-indicator-styled";

function MarketIndicatorComponent() {
  return (
    <MarketIndicator>
      <MIHeaderComponent text="Overall" />
      <MIFullComponent symbol="FTSE" profit={true} price="1,700.82p" />
      <MIFullComponent symbol="S&P500" profit={false} price="$432.56" />
      <MIFullComponent symbol="BTC" profit={true} price="$43,458.92" />
      <MIFullComponent symbol="ETH" profit={true} price="$3,671.84" />
    </MarketIndicator>
  );
}

export default MarketIndicatorComponent;
