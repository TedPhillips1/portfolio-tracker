import { MIFull, MIPrice } from "./mi-price-styled";
import TextComponent from "../text/text-component";

type Props = {
  symbol: string;
  profit: boolean;
  price: string;
};

function MIFullComponent({ symbol, profit, price }: Props) {
  return (
    <MIFull>
      <TextComponent text={`${symbol}: `} />
      <MIPrice profit={profit}>{price}</MIPrice>
    </MIFull>
  );
}

export default MIFullComponent;
