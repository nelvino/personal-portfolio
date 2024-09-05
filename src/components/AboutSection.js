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
          I am a skilled full-stack software developer with over 5 years of
          experience, specializing in building modern, responsive web
          applications using React.js, Node.js, React Native, and the MERN stack. Proficient
          in JavaScript, GraphQL, Azure DevOps, and Agile methodologies, I am passionate about
          delivering high-performance, visually appealing, and user-friendly
          solutions that prioritize speed and functionality.
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Contact Me</motion.button>
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
