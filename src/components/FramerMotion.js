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

const FramerMotion = () => {
  const [element, controls] = useScroll();
  return (
    <>
      <Services
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <Description>
          <Cards>
            <p>
              Framer Motion supports keyframes, allowing you to define complex
              animations with multiple stages or properties. It also provides
              gesture support, enabling you to create interactive and
              gesture-driven animations. Additionally, Framer Motion offers a
              wide range of easing functions to control the timing and
              smoothness of your animations.
            </p>
            <p>
              Framer Motion is a great library to use because it offers a high
              level of control and flexibility in creating visually appealing
              and interactive animations. It simplifies the process of animating
              React components and provides a rich set of features to bring your
              UI to life. Whether it's subtle micro-interactions or complex
              animated transitions, Framer Motion empowers you to create
              engaging user experiences.{" "}
            </p>
            <p>
              By leveraging React Router, Styled Components, and Framer Motion,
              you can enhance your React.js applications with efficient routing,
              modular and encapsulated styling, as well as engaging and
              interactive animations. These libraries are widely adopted in the
              React.js community due to their ease of use, robust features, and
              ability to enhance the development experience.
            </p>
          </Cards>
        </Description>
        <Library>
          <h2>
            <span>Framer Motion</span>
          </h2>
          <p>
            Framer Motion is a feature-rich animation library for React.js
            applications. It provides a simple API for creating animations and
            transitions. With Framer Motion, you can animate various properties
            of your React components, such as position, scale, rotation,
            opacity, and more.
          </p>
        </Library>
      </Services>
    </>
  );
};

const Services = styled(About)`
  min-height: 20vh;
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

export default FramerMotion;
