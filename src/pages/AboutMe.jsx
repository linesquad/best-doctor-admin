import { useState } from "react";

import AboutMeExperience from "../components/AboutMe/AboutMeExperience";
import SkillsStructure from "../components/AboutMe/Skills/SkillsStructure";
import useGetAboutMe from "../hooks/useGetAboutMe";

function AboutMe() {

// TODO: ექსპერიენსზე უნდა გავაკეთოცალკე ანუ ჰუკები უნდა შევცვალო!



  const { data, error, isLoading } = useGetAboutMe();
  const [showModal, setShowModal] = useState(false);
  console.log(data);
  if(isLoading) return <div>Loading...</div>
  if(error) return <div>Error: {error.message}</div>

if (data && Array.isArray(data)) {
  data.forEach((item) => {
    console.log(item.experience);
  });
} else {
  console.log("No data available");
}

  const handleArticleClick = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
    <div className="">
      <h1 className="font-poppinsBold">About me</h1>
      <AboutMeExperience
        handleArticleClick={handleArticleClick}
        showModal={showModal}
      />
    </div>
    <div>
      <SkillsStructure/>
    </div>
    </>
  );
}

export default AboutMe;
