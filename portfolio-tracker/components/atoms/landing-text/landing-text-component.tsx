import { LandingText } from "./landing-text-styled";

type Props = {
  text: string;
  toggle: boolean;
};

function LandingTextComponent({ text, toggle }: Props) {
  return <LandingText toggle={toggle}>{text}</LandingText>;
}

export default LandingTextComponent;
