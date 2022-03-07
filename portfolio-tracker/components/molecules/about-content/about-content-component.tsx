import LandingTextComponent from "../../atoms/landing-text/landing-text-component";
import PageHeader2Component from "../../atoms/page-header-2/page-header-2-component";
import { AboutContent } from "./about-content-styled";

type Props = {
  toggle: boolean;
  header: string;
  text: string;
};

function AboutContentComponent({ toggle, header, text }: Props) {
  return (
    <AboutContent toggle={toggle}>
      <PageHeader2Component toggle={toggle} text={header} />
      <LandingTextComponent toggle={toggle} text={text} />
    </AboutContent>
  );
}

export default AboutContentComponent;
