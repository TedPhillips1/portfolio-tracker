import { userInfo } from "os";
import PageHeaderComponent from "../../atoms/page-header/page-header-component";
import { HomeTextContent } from "./home-text-content-styled";
import { useUser } from "@auth0/nextjs-auth0";
import TextComponent from "../../atoms/text/text-component";

function HomeTextContentComponent() {
  const { user } = useUser();

  return (
    <HomeTextContent>
      <PageHeaderComponent
        text={user ? `Welcome back, ${user.name}` : `Welcome back, User`}
      />
      <TextComponent text="Your Portfolio Values are:" />
      <TextComponent text="Stocks: £5,432.10" />
      <TextComponent text="Crypto: £5,432.10" />
    </HomeTextContent>
  );
}

export default HomeTextContentComponent;
