import { MIPrice } from "../mi-price/mi-price-styled";
import PageHeaderComponent from "../../atoms/page-header/page-header-component";
import TextComponent from "../../atoms/text/text-component";
import { CSTextContent } from "./cs-text-content-styled";
import MIFullComponent from "../mi-price/mi-price-component";

type Props = {
  header: string;
  value: string;
};

function CSTextContentComponent({ header, value }: Props) {
  return (
    <CSTextContent>
      <PageHeaderComponent text={header} />
      <TextComponent text="Your Portfolio Value:" />
      <TextComponent text={value} />
    </CSTextContent>
  );
}

export default CSTextContentComponent;
