import { Footer } from "./footer-styled";
import TextComponent from "../text/text-component";
import FooterTextComponent from "../footer-text/footer-text-component";
import AuthButtonComponent from "../auth-button/auth-button-comp";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import ClearButtonComponent from "../clear-button/clear-button-component";

function FooterComponent() {
  const { user } = useUser();
  return (
    <Footer>
      <FooterTextComponent text="TGP Portfolios - The best portfolio management site for DIY stock and crypto asset investors." />

      {!user && (
        <a href="/api/auth/login">
          <div className="auth-button">
            <AuthButtonComponent text="Log In" />
          </div>
        </a>
      )}
      {user && (
        <>
          <div className="auth-button">
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
          </div>
        </>
      )}
    </Footer>
  );
}

export default FooterComponent;
