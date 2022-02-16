import { TopContent } from "./top-component-styled";
import AuthButtonComponent from "../auth-button/auth-button-comp";
import SubHeaderComponent from "../sub-header/sub-header-component";
import CircleComponent from "../circle/circle-component";
import PageHeaderComponent from "../page-header/page-header-component";
import TextComponent from "../text/text-component";
import ImageComponent from "../image/image-component";

function TopContentComponent() {
  return (
    <TopContent>
      <section>
        <SubHeaderComponent text="Sign Up Today" />
        <PageHeaderComponent text="Lose the Spreadsheet." />
        <TextComponent text="Switch to TGP Portfolios today and make keeping track of investments simple. " />
        <a href="api/auth/login">
          <AuthButtonComponent text="Log In" />
        </a>
      </section>
      <CircleComponent />
      <ImageComponent
        source="https://blockchainstock.azureedge.net/features/C47CB7081D81D4B6A5F3C2D5F97D14376DF75D5E3DDC5733953EABB79263589D.jpg"
        alt="Bitcoin and candlestick chart"
      />
    </TopContent>
  );
}

export default TopContentComponent;
