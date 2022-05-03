import { BSButtonBar } from "./bs-button-bar-styled";
import BSButtonComponent from "../../atoms/bs-button/bs-button-component";

function BSButtonBarComponent() {
  return (
    <BSButtonBar>
      <BSButtonComponent toggle={true} text="Buy" onClick={() => {}} />
      <BSButtonComponent toggle={false} text="Sell" onClick={() => {}} />
    </BSButtonBar>
  );
}

export default BSButtonBarComponent;
