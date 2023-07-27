import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wave = () => {
  return (
    <>
      {/* <WaveSvg
        viewBox="0 0 1360 508"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1 }}
          d="M0 -220C902.338 966.941 1303.97 410.562 1392 -15.9945"          
          stroke="#D96ED4"
          strokeOpacity="0.5"
          strokeWidth="15"
        />
      </WaveSvg> */}
      <WaveSvg
        // width="931"
        // height="481"
        viewBox="0 0 931 481"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1 }}
          d="M0 38.6745C1305.3 -76.2152 1038.8 90.3748 386.153 481"
          stroke="#8fc148"
          strokeOpacity="0.7"
          strokeWidth="5"
        />
      </WaveSvg>
      <WaveSvgViolet
        viewBox="0 0 1360 508"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1 }}
          d="M0 -220C902.338 966.941 1303.97 410.562 1392 -15.9945"
          stroke="#D96ED4"
          strokeOpacity="0.7"
          strokeWidth="15"
        />
      </WaveSvgViolet>
    </>
  );
};

//TODO: need to hide this svg in mobile view! 

const WaveSvg = styled.svg`
  position: absolute;
  left: 0;
  top: 50;
  z-index: 1;
`;

const WaveSvgViolet = styled.svg`
  position: absolute;
  left:0;
  top: 0;
  z-index: -1;
`;

export default Wave;
