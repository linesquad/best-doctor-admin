import { useState } from "react";
import { BsTrash3Fill } from "react-icons/bs";

import Modal from "../Modal";
import AboutMeArticleButton from "./AboutMeArticleButton";
import ExperienceForm from "./ExperienceForm";
import useAddAboutMeExperience from "../../hooks/useAddAboutMeExperience";
import { useDeleteAboutMeExperience } from "../../hooks/useDeleteAboutMeExperience";
import useGetAboutMeExperience from "../../hooks/useGetAboutMeExperience";

function AboutMeExperience({ showModal, handleArticleClick }) {
  const { mutate: addExperience } = useAddAboutMeExperience();
  const { mutate: deleteExperience } = useDeleteAboutMeExperience();
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
  const [isPresent, setIsPresent] = useState(false);

  const handleDelete = (id) => {
    deleteExperience(id);
  };

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
    if (!experience.dateTo && !isPresent) {
      validationErrors.dateTo = "End date is required or mark as Present";
    }
    if (!experience.position) {
      validationErrors.position = "Position is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const experienceToSubmit = {
      ...experience,
      dateTo: isPresent ? null : experience.dateTo,
    };

    addExperience(experienceToSubmit);
    console.log(experienceToSubmit);

    handleClose();
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className=" flex flex-col items-center    bg-[#FFF] shadow-[custom-light] p-[40px]">
      <h1 className="font-poppinsBold text-[40px] leading-[130%] tracking-[-0.4px]">
        Experience
      </h1>

      <div className="flex flex-col w-full ">
        {Array.isArray(data) &&
          data.map((item, index) => (
            <div key={index} className="flex justify-between p-[16px]">
              <div>
                <h2 className="font-poppinsExtraBold leading-[135%] uppercase">
                  {item.place}
                </h2>
                <div className="flex gap-4">
                  <h3 className="font-poppinsExtraBold uppercase ">
                    {item.department}
                  </h3>
                  <span className="font-heeboRegular opacity-50">{`${item.from.slice(0, 4)} - ${item.to ? item.to.slice(0, 4) : "Present"}`}</span>
                </div>
                <h4 className="font-heeboRegular opacity-50">
                  {item.position}
                </h4>
              </div>
              <BsTrash3Fill
                className="text-[25px] text-blue-800 cursor-pointer"
                onClick={() => handleDelete(item.id)}
              />
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
            isPresent={isPresent}
            setIsPresent={setIsPresent}
          />
        </Modal>
      )}
      <AboutMeArticleButton handleArticleClick={handleArticleClick} />
    </div>
  );
}

export default AboutMeExperience;
