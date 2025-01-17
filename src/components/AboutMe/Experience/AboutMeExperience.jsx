import circleIcon from "/images/Icon.svg";

import { useState, useEffect } from "react";
import { MdModeEdit } from "react-icons/md";

import ExperienceSkeleton from "./ExperienceSkeleton.jsx";
import useAddAboutMeExperience from "../../../hooks/useAddAboutMeExperience";
import { useDeleteAboutMeExperience } from "../../../hooks/useDeleteAboutMeExperience";
import useGetAboutMeExperience from "../../../hooks/useGetAboutMeExperience";
import { useGetExperienceById } from "../../../hooks/useGetExperienceById.js";
import useUpdateAboutMeExperience from "../../../hooks/useUpdateAboutMeExperience.js";
import CustomButton from "../../../ui/CustomButton";
import Modal from "../../Modal";
import ExperienceForm from "../Experience/ExperienceForm.jsx";
import ErrorDisplay from "../../ErrorDisplay.jsx";

function AboutMeExperience({ showModal, handleArticleClick }) {
  const [singleExperienceId, setSingleExperienceId] = useState(null);

  const { mutate: addExperience } = useAddAboutMeExperience();
  const { mutate: deleteExperience } = useDeleteAboutMeExperience();
  const { mutate: updateExperience } = useUpdateAboutMeExperience();
  const { data, error, isLoading,isError } = useGetAboutMeExperience();
  const { data: singleExperienceById } =
    useGetExperienceById(singleExperienceId);
  console.log(singleExperienceById);

  const [experience, setExperience] = useState({
    place: "",
    department: "",
    dateTo: "",
    dateFrom: "",
    position: "",
  });

  const [errors, setErrors] = useState({});
  const [isPresent, setIsPresent] = useState(false);

//  TODO:must be fixed!
  useEffect(() => {
    if (singleExperienceById) {
      setExperience({
        place: singleExperienceById.data.place || "",
        department: singleExperienceById.data.department || "",
        dateTo: singleExperienceById.data.to || "",
        dateFrom: singleExperienceById.data.from || "",
        position: singleExperienceById.data.position || "",
      });
    }
  }, [singleExperienceById]);

  const handleUpdateModal = (id) => {
    setSingleExperienceId(id);
    handleArticleClick();
  };

  const handleUpdateExperience = () => {
    updateExperience({
      id: singleExperienceId,
      place: experience.place,
      department: experience.department,
      dateFrom: experience.from,
      dateTo: experience.to,
      position: experience.position,
    });
    handleArticleClick();
  };

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

  if (isLoading) return <ExperienceSkeleton count={5} />;
   if (isError) return <ErrorDisplay errorMsg={error.message} />;

  return (
    <div className="flex flex-col items-center bg-[#FFF] shadow-[custom-light] py-[40px]">
      <div className="flex justify-start w-full">
        <h1 className="font-poppinsBold text-[40px] leading-[130%] tracking-[-0.4px]">
          Experience
        </h1>
      </div>

      <div className="flex flex-col w-full gap-3 mt-3">
        {Array.isArray(data) &&
          data.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-[16px] border rounded-lg"
            >
              {/* Container for image and content */}
              <div className="flex items-start w-full gap-4">
                {/* Image on the left */}
                <div className="bg-softBlue w-5 h-5 flex justify-center items-center rounded-lg">
                  <img src={circleIcon} alt="" />
                </div>

                {/* Content on the right */}
                <div className="flex flex-col">
                  <h2 className="font-poppinsExtraBold leading-[135%] uppercase">
                    {item.place}
                  </h2>
                  <div className="flex gap-4">
                    <h3 className="font-poppinsExtraBold uppercase">
                      {item.department}
                    </h3>
                    <span className="font-heeboRegular opacity-50">{`${item.from.slice(0, 4)} - ${
                      item.to ? item.to.slice(0, 4) : "Present"
                    }`}</span>
                  </div>
                  <h4 className="font-heeboRegular opacity-50">
                    {item.position}
                  </h4>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <MdModeEdit
                  size={30}
                  color="#0077DD"
                  className="cursor-pointer transition-transform duration-200 hover:scale-125"
                  onClick={() => handleUpdateModal(item.id)}
                />
                <img
                  src="/images/delete.svg"
                  onClick={() => handleDelete(item.id)}
                  className="text-lightBlue hover:text-brightBlue cursor-pointer w-7 h-7 transition-transform duration-200 hover:scale-125"
                />
              </div>
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
            handleUpdateExperience={handleUpdateExperience}
            singleExperienceById={singleExperienceById}
          />
        </Modal>
      )}

      <CustomButton
        name={"Add New Experience"}
        color={"text-[#CBDEEF]"}
        bg={"bg-[#004682]"}
        paddingX={"px-4"}
        paddingY={"py-3"}
        textSize={"text-[17px]"}
        onClick={handleArticleClick}
        rounded={"rounded-[48px]"}
        type={"button"}
        weight={"font-robotoMedium"}
        font={"font-robotoMedium"}
        leading="leading-[130%]"
        centered={true}
        width="w-full md:w-[397.249px]"
        marginT="mt-8"
      />
    </div>
  );
}

export default AboutMeExperience;
