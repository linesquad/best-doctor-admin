import { useState } from "react";

import useUpdateAboutMeExperience from "../../hooks/useUpdateAboutMeExperience";
import Modal from "../Modal";
import AboutMeArticleButton from "./AboutMeArticleButton";
import ExperienceForm from "./ExperienceForm";

function AboutMeExperience({ showModal, handleArticleClick }) {
  const { mutate: updateExperience } = useUpdateAboutMeExperience();

  // Initial state for the experience form fields
  const [experience, setExperience] = useState({
    place: "",
    department: "",
    dateTo: "",
    dateFrom: "",
    position: "",
  });

  // Optional: Define errors (you can later add validation logic)
  const [errors, setErrors] = useState({});

  const handleClose = () => {
    // Reset experience state when modal is closed
    setExperience({
      place: "",
      department: "",
      dateTo: "",
      dateFrom: "",
      position: "",
    });
    setErrors({}); // Reset errors as well when closing modal
    handleArticleClick(); // Close the modal
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example validation (you can add more checks here)
    if (!experience.place || !experience.position) {
      setErrors({
        place: "Place is required",
        position: "Position is required",
      });
      return;
    }

    // Call your update function (e.g., updateExperience)
    updateExperience(experience);
    handleClose(); // Close the modal after submission
  };

  return (
    <div className="bg-#FFF shadow-[custom-light]">
      <h1 className="font-poppinsBold text-[40px] leading-[130%] tracking-[-0.4px]">
        Experience
      </h1>

      {showModal && (
        <Modal>
          <ExperienceForm
            experience={experience} // Pass experience state to the form
            setExperience={setExperience} // Pass the setExperience function to handle updates
            onSubmit={handleSubmit} // Pass handleSubmit function
            handleClose={handleClose} // Pass handleClose function to close the modal
            errors={errors} // Pass the errors object for form validation
          />
        </Modal>
      )}
      <AboutMeArticleButton handleArticleClick={handleArticleClick} />
    </div>
  );
}

export default AboutMeExperience;
