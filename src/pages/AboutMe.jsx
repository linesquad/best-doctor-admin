import AwardsStructure from "../components/AboutMe/Awards/AwardsStructure";
import AboutMeEducation from "../components/AboutMe/Education/AboutMeEducation";
import AboutMeExperience from "../components/AboutMe/Experience/AboutMeExperience";
import SkillsStructure from "../components/AboutMe/Skills/SkillsStructure";

function AboutMe() {
  return (
    <div className="px-10">
      <div className="  lg:flex lg:justify-between  block  ">
        <div>
          <AboutMeExperience

          />
        </div>
        <div>
          <AboutMeEducation
            
          />
        </div>
      </div>
      <div>
        <SkillsStructure />
        <AwardsStructure />
      </div>
    </div>
  );
}

export default AboutMe;
