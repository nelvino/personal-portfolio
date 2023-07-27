import React from "react";
import { Link } from "react-router-dom";
import NicoPicture from "../img/NicoElvinoPicture.jpeg";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Welcome to</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              my <span>PORTFOLIO!</span>
            </motion.h2>
          </Hide>
          {/* <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide> */}
        </motion.div>
        <motion.p variants={fade}>
          I am a front-end software developer with 2 years of experience
          specializing in React.js, JavaScript, GraphQL, and Agile
          Methodologies. I have a strong passion for creating visually appealing
          and user-friendly web applications.
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>
            Contact Me
          </motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={NicoPicture} alt="Nico Picture" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
