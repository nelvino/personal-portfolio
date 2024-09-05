import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>Portfolio build by Nico Elvino - 2024  | </FooterText>
        <GithubLink
          href="https://github.com/nelvino/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Check my GitHub here</span>
          <FaGithub size={24} />
        </GithubLink>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #282c34;
  padding: 1rem;
  text-align: center;
  color: #fff;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const FooterText = styled.p`
  color: #fff;
`;

const GithubLink = styled.a`
  color: #fff;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: #61dafb;
  }

  span {
    color: #fff;
    font-size: 1rem;
  }
`;

export default Footer;
