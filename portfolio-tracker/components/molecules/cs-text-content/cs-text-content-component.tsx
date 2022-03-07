import { MIPrice } from "../mi-price/mi-price-styled";
import PageHeaderComponent from "../../atoms/page-header/page-header-component";
import TextComponent from "../../atoms/text/text-component";
import { CSTextContent } from "./cs-text-content-styled";
import MIFullComponent from "../mi-price/mi-price-component";

function CSTextContentComponent() {
  return (
    <CSTextContent>
      <PageHeaderComponent text="Cryptoasset Portfolio" />
      <TextComponent text="Your Portfolio Value:" />
      <TextComponent text="£5,432.10" />
    </CSTextContent>
  );
}

export default CSTextContentComponent;
