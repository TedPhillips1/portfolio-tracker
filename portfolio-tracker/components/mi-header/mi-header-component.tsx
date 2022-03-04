import { MIHeader } from "./mi-header-styled";

type Props = {
  text: string;
};

function MIHeaderComponent({ text }: Props) {
  return <MIHeader>{text}</MIHeader>;
}

export default MIHeaderComponent;
