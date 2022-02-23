import { LandingPage } from "./landing-page-styled";
import TopContentComponent from "../top-content/top-content-component";
import PageHeaderComponent from "../page-header/page-header-component";
import TextComponent from "../text/text-component";
import { useEffect, useState } from "react";



function observerCallback(entries: any, observer:any) {
  entries.forEach((entry: any) => {
    if (entry.isIntersecting) {
      alert("found!");
    }
  });
}

function LandingPageComponent() {
  if(document instanceof Document){
    const observerOptions = {
      root: document.querySelector("#findMe"),
      rootMargin: "0px",
      threshold: 1.0
    };
  
    useEffect(() => {
  
      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );
      
      const target = document.querySelector("#findMe");
  
      if (target !== null){
        observer.observe(target);
      }
  
  
      return () => {
        observer.disconnect();
      };
    }, []);

  }

  return (
    <LandingPage>
      <TopContentComponent />
      <div>
        <PageHeaderComponent text="Lorem ipsum dolor sit" />
        <TextComponent text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      </div>
      <div>
        <TextComponent text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        <PageHeaderComponent text="Lorem ipsum dolor sit" />
      </div>
      <div id="findMe">
        <PageHeaderComponent text="Lorem ipsum dolor sit" />
        <TextComponent text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      </div>
    </LandingPage>
  );
}

export default LandingPageComponent;
