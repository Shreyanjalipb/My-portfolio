import React, { useContext } from "react";
import "./Works.css";
import dj from "../../img/django-icon-1606x2048-lwmw1z73.png";
import python from "../../img/Python-logo-notext.svg.png";
import react from "../../img/React_Logo_SVG.svg.png";
import web from "../../img/web.jpg";
import php from "../../img/unnamed.png"
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            My Skills 
          </span>
          <span>My Brands</span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Know Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
            <div className="w-secCircle" style={{ width: '100px', height: '100px' }}>
  <img src={php} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
</div>
         <div className="w-secCircle" style={{ width: '100px', height: '100px' }}>
  <img src={python} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
</div>

<div className="w-secCircle" style={{ width: '100px', height: '100px' }}>
  <img src={dj} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
</div>
{" "}
<div className="w-secCircle" style={{ width: '100px', height: '100px' }}>
  <img src={react} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
</div>

<div className="w-secCircle" style={{ width: '100px', height: '100px' }}>
  <img src={web} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
</div>

        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
