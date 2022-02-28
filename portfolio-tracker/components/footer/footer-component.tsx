import { Footer } from "./footer-styled";
import TextComponent from "../text/text-component";
import FooterTextComponent from "../footer-text/footer-text-component";
import AuthButtonComponent from "../auth-button/auth-button-comp";
import { useUser } from "@auth0/nextjs-auth0";

function FooterComponent() {
  const { user } = useUser();
  return (
    <Footer>
      <FooterTextComponent text="The best portfolio management site for DIY stock and crypto asset investors." />
      {!user && (
        <a href="/api/auth/login">
          <AuthButtonComponent text="Log In or Sign Up" />
        </a>
      )}
      {user && (
        <a href="/api/auth/logout">
          <AuthButtonComponent text="Log Out" />
        </a>
      )}
    </Footer>
  );
}

export default FooterComponent;
