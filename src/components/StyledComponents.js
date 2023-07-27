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

const StyledComponents = () => {
  const [element, controls] = useScroll();
  return (
    <>
      <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
      >
        <Library>
          {/* <img alt="camera" width="15px" src={ReactLogo} /> */}
          <h2>
            <span>Styled Components</span>
          </h2>
          <p>
            Styled Components is a CSS-in-JS library for styling React
            components. It allows you to write CSS code directly within your
            JavaScript files, co-locating your component code and styling in a
            single place. This approach provides several benefits.
          </p>
        </Library>
        <Description>
          <Cards>
            <p>
              Styled Components offer a unique way to encapsulate styles within
              components. Each component can have its own styles defined,
              preventing style clashes and reducing global styling conflicts. It
              promotes modularity and reusability by creating self-contained
              styled components that can be easily reused throughout your
              application.
            </p>
            <p>
              Furthermore, Styled Components support dynamic styling based on
              props or state. You can conditionally apply styles, respond to
              user interactions, or even create theme-based styling. Styled
              Components provide a powerful and expressive way to style your
              React components, enhancing the overall maintainability and
              flexibility of your codebase.
            </p>
          </Cards>
        </Description>
      </Services>
    </>
  );
};

const Services = styled(About)`
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

export default StyledComponents;
