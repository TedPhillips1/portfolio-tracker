import MIHeaderComponent from "../../atoms/mi-header/mi-header-component";
import TableRowComponent from "../table-row/table-row-component";
import { DisplayTable } from "./display-table-styled";

const holdings = [
  {
    ticker: "BTC",
    amount: "0.0289",
    basis: "1298",
    ABP: "39,867",
    currentPrice: "42,763",
  },
  {
    ticker: "BTC",
    amount: "0.0289",
    basis: "1298",
    ABP: "39,867",
    currentPrice: "42,763",
  },
  {
    ticker: "BTC",
    amount: "0.0289",
    basis: "1298",
    ABP: "39,867",
    currentPrice: "42,763",
  },
];

function DisplayTableComponent() {
  return (
    <DisplayTable>
      <MIHeaderComponent text="Holdings" />
      <TableRowComponent
        C1="Ticker"
        C2="Amount"
        C3="Basis"
        C4="Avg. Buy Price"
        C5="Current Price"
        C6="P/L"
        toggleColor={true}
      />
      {holdings.map(({ ticker, amount, basis, ABP, currentPrice }, index) => {
        return (
          <TableRowComponent
            key={index}
            C1={ticker}
            C2={amount}
            C3={basis}
            C4={ABP}
            C5={currentPrice}
            C6={(
              parseInt(amount) * parseInt(currentPrice) -
              parseInt(basis)
            ).toString()}
            toggleColor={false}
          />
        );
      })}
    </DisplayTable>
  );
}

export default DisplayTableComponent;
