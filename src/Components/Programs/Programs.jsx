import React from 'react';
import "./Programs.css";
import program_1 from "../../Assets/program-1.png";
import program_2 from "../../Assets/program-2.png";
import program_3 from "../../Assets/program-3.png";
import program_Icon_1 from "../../Assets/program-icon-1.png"
import program_Icon_2 from "../../Assets/program-icon-2.png"
import program_Icon_3 from "../../Assets/program-icon-3.png"

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_Icon_1} alt="" />
          <p>Graduation Degree</p>
        </div>
        </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_Icon_2} alt="" />
          <p>Masters Degree</p>
        </div>
        </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_Icon_3} alt="" />
          <p>Post Graduation</p>
        </div>
        </div>
      
    </div>
  )
}

export default Programs
