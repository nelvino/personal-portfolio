import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { titleAnim } from "../../animation";

const ContactMethod = ({ title, icon, link }) => {
  return (
    <Hide>
      <Social variants={titleAnim}>
        <Circle>{icon}</Circle>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h2>{title}</h2>
        </a>
      </Social>
    </Hide>
  );
};

// Styled Components

const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    color: #353535;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease;

    &:hover {
      color: #61dafb;
    }
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

export default ContactMethod;
