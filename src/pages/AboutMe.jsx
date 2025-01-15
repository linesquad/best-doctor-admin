import { useState } from "react";

import AboutMeExperience from "../components/AboutMe/Experience/AboutMeExperience";
import SkillsStructure from "../components/AboutMe/Skills/SkillsStructure";

function AboutMe() {
  const [showModal, setShowModal] = useState(false);

  const handleArticleClick = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="px-10">
      <div>
        <h1 className="font-poppinsBold">About me</h1>
        <AboutMeExperience
          handleArticleClick={handleArticleClick}
          showModal={showModal}
        />
      </div>
      <div>
        <SkillsStructure />
      </div>
    </div>
  );
}

export default AboutMe;
