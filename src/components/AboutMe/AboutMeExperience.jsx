import { useState } from "react";

import Modal from "../Modal";
import AboutMeArticleButton from "./AboutMeArticleButton";
import ExperienceForm from "./ExperienceForm";
import useAddAboutMeExperience from "../../hooks/useAddAboutMeExperience";
import useGetAboutMeExperience from "../../hooks/useGetAboutMeExperience";

function AboutMeExperience({ showModal, handleArticleClick }) {
  const { mutate: addExperience } = useAddAboutMeExperience();
  const { data, error, isLoading } = useGetAboutMeExperience();

  console.log(data);

  const [experience, setExperience] = useState({
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

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    addExperience(experience);
    console.log(experience);

    handleClose();
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="bg-#FFF shadow-[custom-light]">
      <h1 className="font-poppinsBold text-[40px] leading-[130%] tracking-[-0.4px]">
        Experience
      </h1>

      <div>
        {Array.isArray(data) &&
          data.map((item, index) => (
            <div key={index}>
              <h2>{item.place}</h2>
              <div>
                <h3>{item.department}</h3>
                <span>{`${item.from} - ${item.to}`}</span>
              </div>
              <h4>{item.position}</h4>
            </div>
          ))}
      </div>

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
