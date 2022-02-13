import { NavBar } from "./navbar-styled";
import LogoComponent from "../logo/logo-component";
import ClearButtonComponent from "../clear-button/clear-button-component";
import AuthButtonComponent from "../auth-button/auth-button-comp";
import UserImgComponent from "../user-img/user-img-component";

function NavBarComponent() {
  return (
    <NavBar>
      <>
        <LogoComponent />
      </>
      <nav>
        <ClearButtonComponent text="About" />
        <AuthButtonComponent text="Log In" />
      </nav>
    </NavBar>
  );
}

export default NavBarComponent;
