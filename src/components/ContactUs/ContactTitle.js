import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { titleAnim } from "../../animation";

const ContactTitle = ({ title }) => {
  return (
    <Title>
      <Hide>
        <motion.h2 variants={titleAnim}>{title}</motion.h2>
      </Hide>
    </Title>
  );
};

// Styled Components

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default ContactTitle;
