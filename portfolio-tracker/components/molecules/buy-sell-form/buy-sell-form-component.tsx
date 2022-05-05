import MIHeaderComponent from "../../atoms/mi-header/mi-header-component";
import { BuySellForm } from "./buy-sell-form-styled";

type Props = {
  text: string;
  toggleForm: () => void;
};

function BuySellFormComponent({ text, toggleForm }: Props) {
  return (
    <BuySellForm>
      <MIHeaderComponent text={text} />
      <button onClick={toggleForm}>Cancel</button>
    </BuySellForm>
  );
}

export default BuySellFormComponent;
