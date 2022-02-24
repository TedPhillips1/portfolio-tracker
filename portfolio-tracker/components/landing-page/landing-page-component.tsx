import { LandingPage } from "./landing-page-styled";
import TopContentComponent from "../top-content/top-content-component";
import PageHeaderComponent from "../page-header/page-header-component";
import TextComponent from "../text/text-component";
import { useEffect, useReducer } from "react";
import PageHeader2Component from "../page-header-2/page-header-2-component";
import LandingTextComponent from "../landing-text/landing-text-component";

type initialState = {
  div1: boolean;
  div2: boolean;
  div3: boolean;
};

const initialStates: initialState = {
  div1: false,
  div2: false,
  div3: false,
};

function reducer(state: initialState, action: string) {
  switch (action) {
    case "1":
      return state.div1 ? state : { ...state, div1: true };
    case "2":
      return state.div2 ? state : { ...state, div2: true };
    case "3":
      return state.div3 ? state : { ...state, div3: true };
    default:
      return state;
  }
}

function LandingPageComponent() {
  const [state, dispatch] = useReducer(reducer, initialStates);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    function observerCallback(entries: any, observer: any) {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          console.log("called");
          dispatch("3");
        }
      });
    }

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const target = document.querySelector("#findMe");

    if (target !== null) {
      observer.observe(target);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <LandingPage>
      <TopContentComponent />

      <div>
        <PageHeader2Component
          toggleAnimation={state.div1}
          text="Lorem ipsum dolor sit"
        />
        <LandingTextComponent text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      </div>

      <div>
        <PageHeader2Component
          toggleAnimation={state.div2}
          text="Lorem ipsum dolor sit"
        />
        <LandingTextComponent text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      </div>

      <div id="findMe">
        <PageHeader2Component
          toggleAnimation={state.div3}
          text="Lorem ipsum dolor sit"
        />
        <LandingTextComponent
          toggle={state.div3}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </div>
    </LandingPage>
  );
}

export default LandingPageComponent;
