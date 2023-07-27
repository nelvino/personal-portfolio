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

const ReactRouter = () => {
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
            <span>React Router</span>
          </h2>
          <p>
            React Router is a library specifically designed for handling routing
            in React.js applications. It allows you to create single-page
            applications with multiple views or pages. React Router provides a
            declarative approach to routing, meaning you can define routes in a
            structured manner within your application.
          </p>
        </Library>
        <Description>
          <Cards>
            <p>
              React Router enables you to map URLs to specific components,
              making it easy to navigate between different views and render the
              appropriate components based on the current URL. It supports
              various types of routing, including nested routes, dynamic
              routing, and even server-side rendering.
            </p>
            <p>
              React Router is a good library to use because it simplifies the
              process of managing routing in your React.js application. It
              provides a convenient and intuitive API that abstracts away the
              complexities of handling URL changes and rendering components
              accordingly. With React Router, you can create a seamless and
              intuitive navigation experience for your users.
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

export default ReactRouter;
