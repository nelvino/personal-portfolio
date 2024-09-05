import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import DonatenicoApp from "../img/DonatenicoApp.png";
import legasiCover from "../img/legasiCover.png";
import triiyoWebsite from "../img/triiyo-website.png";

const PortfolioCards = () => {
  const cardData = [
    {
      img: DonatenicoApp,
      title: "DonateNico Web App",
      description: "MERN stack application for donations. Server code deployed on Render, and client code deployed on Vercel.",
      link: "https://donate-nico.vercel.app/register",
    },
    {
      img: legasiCover,
      title: "Legasi Mobile App",
      description: "React Native app, optimized for both iOS and Android deployments. Built with Firebase Auth, DB and Storage, and Stripe integration.",
      link: "/",
    },
    {
      img: triiyoWebsite,
      title: "triiyo marketing website",
      description: "Gatsby.js & React.js marketing website, connected to Storyblok headless CMS via GraphQL. Hosted on Netlify.",
      link: "https://triiyo.com/",
    },
  ];

  return (
    <Section>
      <Title>Check out some of my work</Title>
      <CardContainer>
        {cardData.map((card, index) => (
          <Card key={index}>
          {card.link.startsWith('http') ? (
            <a href={card.link} target="_blank" rel="noopener noreferrer">
              <CardImage src={card.img} alt={card.title} />
              <CardContent>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </CardContent>
            </a>
          ) : (
            <Link to={card.link}>
              <CardImage src={card.img} alt={card.title} />
              <CardContent>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </CardContent>
            </Link>
          )}
        </Card>
        ))}
      </CardContainer>
    </Section>
  );
};

// Styled Components

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #353535;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  a {
    text-decoration: none; /* Remove underline from <a> tags */
    color: inherit; /* Inherit color for links */
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;

  h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.5rem;
    padding-top: 1.5rem;
  }

  p {
    margin: 0;
    color: #666;
  }
`;

export default PortfolioCards;
