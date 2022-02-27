import { PageHeader2 } from "./page-header-2-styled";

type Props = {
  text: string;
  toggle: boolean;
};

function PageHeader2Component({ text, toggle }: Props) {
  return <PageHeader2 toggle={toggle}>{text}</PageHeader2>;
}

export default PageHeader2Component;
