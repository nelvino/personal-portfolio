import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa"; // Import the GitHub icon

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>Portfolio build by Nico Elvino - 2024</p>
        <GithubLink href="https://github.com/nelvino/" target="_blank" rel="noopener noreferrer">
          <span>Check my GitHub here</span> 
          <FaGithub size={24} />
        </GithubLink>
      </FooterContent>
    </FooterContainer>
  );
};

// Styled Components

const FooterContainer = styled.footer`
  background-color: #282c34;
  padding: 1rem;
  text-align: center;
  color: #fff;
`;

const FooterContent = styled.div`
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap; /* Ensure proper wrapping on smaller screens */
`;

const GithubLink = styled.a`
  color: #fff;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Space between the text and the icon */

  &:hover {
    color: #61dafb;
  }

  span {
    color: #fff; /* Ensure the text is white */
    font-size: 1rem;
  }
`;

export default Footer;
