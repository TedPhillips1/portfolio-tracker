# portfolio-tracker

## Journey

The idea for a stock and crypto portfolio tracker came about when I realised that my curerent solution- A big messy excel spreadsheet- was too convoluted and could be done in a much cleaner fashion. I want to do all the calculations I was doing manually to be done in the app and for it to display information in a clean and understasndable fashion.

### 2/2/2022

- Ideation Done
- Repo Created

### 7/2/2022

- Page structure made
- color scheme chosen

### 8/2/2022

- Low fidelity Wireframes made

### 9/2/2022

- High fidelity wireframes made
- Page structure changed to include an about page
- Styling file made to hold font and colors

### 10/2/2022

- visual Component breakdowns made

### 11/2/2022

- Page plans done including components, hooks and props required for each page

### 12/2/2022

- Master Plan done including tech stack and combined components
- [Kanban board](https://trello.com/b/YRioqoV6/portfolio) made with meta tasks laid out.
- Tomorrows sprint planned in kanban board

### 13/2/2022

- Made Logo
- Changed shade of blue in styling.md
- Installed Required Dependencies
- Researched how the app will work/fit together
- Made Navbar and all its components
- Made pages and used them to make navbar functional
- Configured Auth0 to next.js
- added Auth0 to Navbar
- Configured styled-components to next.js
- added a custom font
- Planned tomorrows sprint

Notes: Got stuck on configuration problems for a while, make sure everything is configured before you use it and take time to configure correctly at the start of the build. I made some changes to the shade of blue on build time for better UI/UX design. Pretty happy with progress overall though, now the navbar is done I will just start to work on the pages themselves.

### 14/2/2022

- Made Laning Page Components
- Put it together

### 15/2/2022

- Played around with some CSS features such as:
  - Gradients
  - Animations
- Learned about styled-component keyframes

A big aim today was to find how to give my design a professional feel. I felt that my landing page from yesterday had a beginner/basic look but by adding some simple things like a fade in and design element it took the design up a notch. I will continue to find little tricks like this to give my design an edge.
I've also decided that I am going to scrap the about page and fill out the landing page some more.

### 16/2/2022

- Played around with more animations
- Tried to use Intersection Observer to trigger anuimation on scroll but couldn't get it working

Probably going to try again tomorrow with intersection observer however I may move on if I can't do it tomorrow.

### 23/2/2022

- Found a working intersection observer example
- Tried to implement it

### 24/2/2022

- Got the intersection observer working finally!
- Made it trigger a state change using useReducer for one component
- used this state to trigger an animation by passing the boolean value down to the styled component

After getting the intersection observer to work (Finally!) I implemented it into my app by making it change the state of an object. I used useReducer for this as I plan to have mutiple different divs each requiring their state toggled at different times. I am unsure how I will do this yet and will have to look more into this to work it out without creating a new useEffect for each div. I then passed down this boolean to my styled component to trigger the animation. As well as getting this to work, I also learned that to reference keyframes within the conditional styling of the components I needed to use 'css', imported from styled-components, before the backticks.

### 27/2/2022

- Intersection observer working for all divs
- Styled the divs more
- Added a footer component

I used multiple targets for the intersection observer and used an if statement within the observer function to check which target has been intersected. This then triggered a different dispatch function for each. I then styled these, starting with a gradient but opted for a more simple shaded background in the end. Would like to add a 2x2 grid under the top div that animates in 1 by 1.

### 5/3/2022

- Added the chart.js react package
- Built a line chart
- styled it and fed it dummy data

Unfortunately I couldn't style the chart.js line graph how i wanted to in the plan. I hoped to make the line color dynamic and change based on P&L. It is ok for now however, I may find a different package that can do that in the future.

### 7/3/2022

- Used the [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) filing system
- Started on the crypto page

I decided to go for the [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) filing system as it makes the most sense to me coming from a science background. I didnt't use the template folder as I didn't think I needed it however after doing a bit of coding using that method I now feel I need it so I will implement it next.
