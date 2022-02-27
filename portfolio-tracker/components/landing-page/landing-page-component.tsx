import { LandingPage } from "./landing-page-styled";
import TopContentComponent from "../top-content/top-content-component";
import { useEffect, useReducer } from "react";
import AboutContentComponent from "../about-content/about-content-component";

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
      threshold: 0.7,
    };

    function observerCallback(entries: any, observer: any) {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "div3") {
            dispatch("3");
          } else if (entry.target.id === "div2") {
            dispatch("2");
          } else if (entry.target.id === "div1") {
            dispatch("1");
          }
        }
      });
    }

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const target1 = document.querySelector("#div1");
    const target2 = document.querySelector("#div2");
    const target3 = document.querySelector("#div3");

    if (target1 !== null) {
      observer.observe(target1);
    }

    if (target2 !== null) {
      observer.observe(target2);
    }

    if (target3 !== null) {
      observer.observe(target3);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <LandingPage>
      <TopContentComponent />
      <div id="div1">
        <AboutContentComponent
          toggle={state.div1}
          header="Become a Better Investor"
          text="Want to become a better investor? TGP portfolios makes it simple. Reduce your time spent tracking, leaving more for the important stuff."
        />
      </div>
      <div id="div2">
        <AboutContentComponent
          toggle={state.div2}
          header="Real-time Portfolio Valuations"
          text="Track symbols with real-time data on your holdings and market indicators."
        />
      </div>
      <div id="div3">
        <AboutContentComponent
          toggle={state.div3}
          header="Stock & Crypto Assets"
          text="Find all of your stock and crypto holdings in one place."
        />
      </div>
    </LandingPage>
  );
}

export default LandingPageComponent;
