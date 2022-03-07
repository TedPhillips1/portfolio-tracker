import { BSButton } from "./bs-button-styled";

type Props = {
  toggle: boolean;
  text: string;
  onClick: () => void;
};

function BSButtonComponent({ toggle, onClick, text }: Props) {
  return (
    <BSButton toggle={toggle} onClick={onClick}>
      {text}
    </BSButton>
  );
}

export default BSButtonComponent;
