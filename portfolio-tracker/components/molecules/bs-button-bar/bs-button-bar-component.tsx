import { BSButtonBar } from "./bs-button-bar-styled";
import BSButtonComponent from "../../atoms/bs-button/bs-button-component";

type Props = {
  toggleBuy: () => void;
  toggleSell: () => void;
  disable: number;
};

function BSButtonBarComponent({ toggleBuy, toggleSell, disable }: Props) {
  return (
    <BSButtonBar>
      <BSButtonComponent
        toggle={true}
        text="Buy"
        onClick={toggleBuy}
        disable={disable}
      />
      <BSButtonComponent
        toggle={false}
        text="Sell"
        onClick={toggleSell}
        disable={disable}
      />
    </BSButtonBar>
  );
}

export default BSButtonBarComponent;
