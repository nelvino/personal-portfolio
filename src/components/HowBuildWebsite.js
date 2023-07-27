import React from "react";
//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import ReactLogo from "../img/ReactLogo.png";
//Styles
import { About, Description, Library } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const HowBuildWebsite = () => {
  const [element, controls] = useScroll();
  return (
    <>
      <ReactRouterContent
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <Library>
          {/* <img alt="camera" width="15px" src={ReactLogo} /> */}
          <h2>
            <span>This is how I built this Reactjs Application!</span>
          </h2>
          <p>
            To work with React.js, I set up my development environment and
            created a new project. Firstly, I ensured that I had Node.js
            installed, as React.js relies on it. I downloaded Node.js from the
            official website and selected a code editor that suited my
            preferences, such as Visual Studio Code.
          </p>
        </Library>
        <Description>
          <Cards>
            <p>
              With the environment prepared, I created a new React project using
              the "create-react-app" command and specified the desired project
              name. This generated a basic React project structure for me. Once
              the project was created, I navigated to its directory using the
              terminal.
            </p>
            <p>
              To begin development, I started the React development server by
              running the "npm start" command. This launched my React project on
              a local server, usually at "localhost:3000". The development
              server provided live preview and automatic updates, reflecting any
              changes I made to my code.
            </p>
          </Cards>
        </Description>
      </ReactRouterContent>
    </>
  );
};

const ReactRouterContent = styled(About)`
  min-height: 20vh;
  background-color: aliceblue;
  h2 {
    padding-bottom: 2rem;
    padding-left: 0rem;
  }
  p {
    width: 70%;
    /* padding: 2rem 0rem 4rem 0rem; */
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

export default HowBuildWebsite;
