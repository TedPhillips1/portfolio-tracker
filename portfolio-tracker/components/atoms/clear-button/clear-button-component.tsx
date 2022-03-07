import { ClearButton } from "./clear-button-styled";

type Props = {
  text: string;
};

function ClearButtonComponent({ text }: Props) {
  return <ClearButton>{text}</ClearButton>;
}

export default ClearButtonComponent;
