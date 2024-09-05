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
          <Title>{title}</Title>
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
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

const Title = styled.h2`
  margin: 2rem;
  color: #353535;
  transition: color 0.3s ease;

  ${Social}:hover & {
    color: #61dafb;
  }
`;

export default ContactMethod;
