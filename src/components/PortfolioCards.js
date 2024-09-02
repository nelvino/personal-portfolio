import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Sample Images (You can replace these with actual image imports)
import img1 from "../img/home1.png";
import img2 from "../img/home2.png";
import img3 from "../img/goodtimes-small.png";

const PortfolioCards = () => {
  const cardData = [
    {
      img: img1,
      title: "Project One",
      description: "This is a brief description of Project One.",
      link: "/project-one",
    },
    {
      img: img2,
      title: "Project Two",
      description: "This is a brief description of Project Two.",
      link: "/project-two",
    },
    {
      img: img3,
      title: "Project Three",
      description: "This is a brief description of Project Three.",
      link: "/project-three",
    },
    // Add more card data as needed
  ];

  return (
    <CardContainer>
      {cardData.map((card, index) => (
        <Card key={index}>
          <Link to={card.link}>
            <CardImage src={card.img} alt={card.title} />
            <CardContent>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </CardContent>
          </Link>
        </Card>
      ))}
    </CardContainer>
  );
};

// Styled Components

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
  background-color: #f8f8f8;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;

  h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    color: #666;
  }
`;

export default PortfolioCards;
