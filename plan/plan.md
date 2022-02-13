# Master Plan

## Tech Stack

### Front-end

TypeScript, Next.js, Auth0, Chart.js, styled-components, Storybook Netlify (could be vercel)

### Back-end

TypeScript, Express.js, Node.js, SQL, Heroku

## Components

- NavBar (nav)
- Logo (img)
- ClearButton (button)
- AuthButton (button)
- LandingPage (main)
- Image (img)
- PageHeader (h1)
- Text (p)
- AboutPage (main)
- Buttons (div)
- UserImg (img)
- HomePage (main)
- TopContent (div)
- MainContent (section)
- MarketIndicator (section)
- MarketHeader (h2)
- Indicator (p)
- Chart (div)
- ButtonSection (div)
- FormButton (button)
- Form (div)
- FormHeader (h3)
- FormFields (div)
- FormInput (div)
- Input (input)
- SubmitButton (button)
- CancelButton (button)
- Table (div)
- ColumnHeadings (div)
- TableCell (div)
- TableRow (div)

Changes in development:

- Adding NavButtons (nav)
- removing ButtonSection (div)
  More descriptive and better semantic html tags
  Ended up removing this component altogether and using a plain nav tag. was causing typescript issues and it is unnecessary.
