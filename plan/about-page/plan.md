# About Page

## Comps for About Page:

- NavBar
  - Logo
  - ClearButton
  - AuthButton
- AboutPage
  - PageHeader
  - Image
  - Text
  - AuthButton

## Hooks and Props:

- NavBar:
  - useAuth - isAuthorised, LogIn and Out functions, user
- Logo
- ClearButton
  - !isAuthorised
  - Link
- AuthButton

  - !isAuthorised
  - LogIn function
  - inNavBar

- AboutPage
- PageHeader
  - text
  - !isAuthorised
- Image
  - src
- Text
  - text
  - !isAuthorised
- AuthButton
  - !inNavBar
