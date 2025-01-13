import { useState } from "react";

import AboutMeExperience from "../components/AboutMe/AboutMeExperience";
import useGetAboutMe from "../hooks/useGetAboutMe";

function AboutMe() {
  const { data, error, isLoading } = useGetAboutMe();
  const [showModal, setShowModal] = useState(false);
if (data && Array.isArray(data)) {
  data.forEach((item) => {
    console.log(item.experience); // Log the experience of each item
  });
} else {
  console.log("No data available");
}

  const handleArticleClick = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="">
      <h1 className="font-poppinsBold">About me</h1>
      <AboutMeExperience
        handleArticleClick={handleArticleClick}
        showModal={showModal}
      />
    </div>
  );
}

export default AboutMe;
