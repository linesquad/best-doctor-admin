import { useState } from "react";

import Modal from "../Modal";
import AboutMeArticleButton from "./AboutMeArticleButton";
import ExperienceForm from "./ExperienceForm";
import useAddAboutMeExperience from "../../hooks/useAddAboutMeExperience";

function AboutMeExperience({ showModal, handleArticleClick }) {
  const { mutate: addExperience } = useAddAboutMeExperience();

  const [experience, setExperience] = useState({
    id: 1,
    place: "",
    department: "",
    dateTo: "",
    dateFrom: "",
    position: "",
  });

  const [errors, setErrors] = useState({});

  const handleClose = () => {
    setExperience({
      place: "",
      department: "",
      dateTo: "",
      dateFrom: "",
      position: "",
    });
    setErrors({});
    handleArticleClick();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (!experience.place) {
      validationErrors.place = "Place is required";
    }
    if (!experience.department) {
      validationErrors.department = "Department is required";
    }
    if (!experience.dateFrom) {
      validationErrors.dateFrom = "Start date is required";
    }
    if (!experience.dateTo) {
      validationErrors.dateTo = "End date is required";
    }
    if (!experience.position) {
      validationErrors.position = "Position is required";
    }

    // If validation errors exist, update errors state and stop form submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    addExperience(experience);
    console.log(experience);

    handleClose();
  };

  return (
    <div className="bg-#FFF shadow-[custom-light]">
      <h1 className="font-poppinsBold text-[40px] leading-[130%] tracking-[-0.4px]">
        Experience
      </h1>

      {showModal && (
        <Modal>
          <ExperienceForm
            experience={experience}
            setExperience={setExperience}
            onSubmit={handleSubmit}
            handleClose={handleClose}
            errors={errors}
          />
        </Modal>
      )}
      <AboutMeArticleButton handleArticleClick={handleArticleClick} />
    </div>
  );
}

export default AboutMeExperience;
