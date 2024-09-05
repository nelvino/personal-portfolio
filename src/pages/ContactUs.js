import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import styled from "styled-components";
import ContactTitle from "../components/ContactUs/ContactTitle";
import ContactMethod from "../components/ContactUs/ContactMethod";

// Import React Icons for more colorful and modern icons
import { FaEnvelope, FaGithub, FaPhone } from "react-icons/fa";

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <ContactTitle title="Get in touch." />
      <ContactMethods>
        <ContactMethod
          title="Send an Email"
          icon={<FaEnvelope size={24} color="#E74C3C" />} // Red color for email
          link="mailto:nicoelvino@gmail.com"
        />
        <ContactMethod
          title="Check my GitHub"
          icon={<FaGithub size={24} color="#333" />} // Default GitHub color
          link="https://github.com/nelvino"
        />
        <ContactMethod
          title="Call Me"
          icon={<FaPhone size={24} color="#2ECC71" />} // Green color for phone
          link="tel:0415164208"
        />
      </ContactMethods>
    </ContactStyle>
  );
};

// Styled Components

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default ContactUs;
