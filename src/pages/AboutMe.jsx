import { useState } from "react";

import AboutMeEducation from "../components/AboutMe/Education/AboutMeEducation";
import AboutMeExperience from "../components/AboutMe/Experience/AboutMeExperience";
import SkillsStructure from "../components/AboutMe/Skills/SkillsStructure";

function AboutMe() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleArticleClick = () => {
    setShowModal((prev) => !prev);
  };
  const handleArticleClick2 = () => {
    setShowModal2((prev) => !prev);
  };

  return (
    <div className="px-10">
      <div className="  lg:flex lg:justify-between  block  ">
        <div>
          <AboutMeExperience
            handleArticleClick={handleArticleClick}
            showModal={showModal}
          />
        </div>
        <div>
          <AboutMeEducation
            handleArticleClick2={handleArticleClick2}
            showModal2={showModal2}
          />
        </div>
      </div>
      <div>
        <SkillsStructure />
      </div>
    </div>
  );
}

export default AboutMe;
