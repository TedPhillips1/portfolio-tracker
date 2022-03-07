import { NavBar } from "./navbar-styled";
import LogoComponent from "../../atoms/logo/logo-component";
import ClearButtonComponent from "../../atoms/clear-button/clear-button-component";
import AuthButtonComponent from "../../atoms/auth-button/auth-button-comp";
import UserImgComponent from "../../atoms/user-img/user-img-component";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

function NavBarComponent() {
  const { user } = useUser();
  return (
    <NavBar>
      <>
        <Link href="/">
          <a>
            <LogoComponent />
          </a>
        </Link>
      </>
      <nav>
        {!user && (
          <>
            <a href="/api/auth/login">
              <AuthButtonComponent text="Log In" />
            </a>
          </>
        )}
        {user && (
          <>
            <Link href="/">
              <a>
                <ClearButtonComponent text="Home" />
              </a>
            </Link>
            <Link href="/crypto">
              <a>
                <ClearButtonComponent text="Crypto" />
              </a>
            </Link>
            <Link href="/stocks">
              <a>
                <ClearButtonComponent text="Stocks" />
              </a>
            </Link>
            <a href="/api/auth/logout">
              <AuthButtonComponent text="Log Out" />
            </a>
            {user.picture && user.name && (
              <UserImgComponent userImg={user.picture} username={user.name} />
            )}
          </>
        )}
      </nav>
    </NavBar>
  );
}

export default NavBarComponent;
