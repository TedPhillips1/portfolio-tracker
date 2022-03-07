import { FooterText } from "./footer-text-styled";

type Props = {
  text: string;
};

function FooterTextComponent({ text }: Props) {
  return <FooterText>{text}</FooterText>;
}

export default FooterTextComponent;
