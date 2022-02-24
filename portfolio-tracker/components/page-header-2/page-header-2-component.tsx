import { PageHeader2 } from "./page-header-2-styled";

type Props = {
  text: string;
  toggleAnimation: boolean;
};

function PageHeader2Component({ text, toggleAnimation }: Props) {
  return <PageHeader2 toggleAnimation={toggleAnimation}>{text}</PageHeader2>;
}

export default PageHeader2Component;
