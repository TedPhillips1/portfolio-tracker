import { BSButton } from "./bs-button-styled";

type Props = {
  toggle: boolean;
  text: string;
  onClick: () => void;
  disable: number;
};

function BSButtonComponent({ toggle, onClick, text, disable }: Props) {
  return (
    <BSButton
      toggle={toggle}
      onClick={onClick}
      disabled={disable > 0 ? true : false}
    >
      {text}
    </BSButton>
  );
}

export default BSButtonComponent;
