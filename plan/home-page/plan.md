# Home Page

## Comps for About Page:

- NavBar
  - Logo
  - Buttons
    - ClearButton
    - ClearButton
    - ClearButton
    - AuthButton
    - UserImg
- HomePage
- TopContent
- MainContent
  - PageHeader
  - Text
  - Text
  - Text
- MarketIndicator
  - MarketHeader
  - Indicator
  - Indicator
  - Indicator
  - Indicator
- Chart

## Hooks and Props:

- NavBar:
  - useAuth - isAuthorised, LogIn and Out functions, user
- Logo
- Buttons
- ClearButton
  - isAuthorised
  - Link
- ClearButton
  - isAuthorised
  - Link
- ClearButton
  - isAuthorised
  - Link
- AuthButton
  - isAuthorised
  - LogOut function
  - inNavBar
- UserImg

  - user.img

- HomePage
  - useAuth - user
  - useState - portfValue
- MainContent
  - portfValue
  - user.name
- PageHeader
  - user.name
- Text
- Text
  - portfValue.stock
- Text
  - portfValue.crypto
- MarketIndicator
  - useState - CommodityValues
- MarketHeader
- Indicator
  - CommodityValues.ftse100
- Indicator
  - CommodityValues.snp500
- Indicator
  - CommodityValues.btc
- Indicator
  - CommodityValues.eth
- Chart
