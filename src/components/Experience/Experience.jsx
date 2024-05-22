import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
import DSATM from "../../img/DSATM.jpg"
import BMS from "../../img/BMS-COLLEGE.jpg"
import ST from "../../img/St.anns_school.jpg"
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* College Picture */}
        <div className="square" style={{ width: '50px', height: '50px' }}>
          <img src={DSATM} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <span>My Post Graduation</span>
      </div>
      <div className="achievement">
        {/* College Picture */}
        <div className="square" style={{ width: '50px', height: '50px' }}>
          <img src={BMS} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <span>My Graduation</span>
      </div>
      <div className="achievement">
        {/* College Picture */}
        <div className="square" style={{ width: '50px', height: '50px' }}>
          <img src={ST} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <span>My Schooling</span>
      </div>
    </div>

  );
};

export default Experience;
