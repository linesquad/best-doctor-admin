import circleIcon from "/images/Icon.svg";

import { useState } from "react";

import ExperienceSkeleton from "./ExperienceSkeleton.jsx";
import useAddAboutMeExperience from "../../../hooks/useExperience/useAddAboutMeExperience";
import { useDeleteAboutMeExperience } from "../../../hooks/useExperience/useDeleteAboutMeExperience";
import useGetAboutMeExperience from "../../../hooks/useExperience/useGetAboutMeExperience";
import { useGetExperienceById } from "../../../hooks/useExperience/useGetExperienceById.js";
import useUpdateAboutMeExperience from "../../../hooks/useExperience/useUpdateAboutMeExperience.js";
import CustomButton from "../../../ui/CustomButton";
import ExperienceForm from "../Experience/ExperienceForm.jsx";
import ErrorDisplay from "../../ErrorDisplay/ErrorDisplay.jsx";
import ExperienceList from "./ExperienceList.jsx";

function AboutMeExperience() {
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const handleArticleClick = () => {
    setShowModal((prev) => !prev);
  };

  const handleUpdateArticleClick = () => {
    setShowUpdateModal((prev) => !prev);
  };
  const [singleExperienceId, setSingleExperienceId] = useState(null);

  const { mutate: addExperience } = useAddAboutMeExperience();
  const { mutate: deleteExperience } = useDeleteAboutMeExperience();
  const { mutate: updateExperience } = useUpdateAboutMeExperience();
  const { data, error, isLoading, isError } = useGetAboutMeExperience();

  const { data: singleExperienceById } =
    useGetExperienceById(singleExperienceId);

  const [errors, setErrors] = useState({});
  const [isPresent, setIsPresent] = useState(false);

  const handleUpdateModal = (id) => {
    setSingleExperienceId(id);
    handleUpdateArticleClick();
  };

  const handleUpdateExperience = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);

    const updatedPlace = formData.get("place");
    const updatedDepartment = formData.get("department");
    const updatedDateFrom = formData.get("dateFrom");
    const updatedDateTo = isPresent ? null : formData.get("dateTo");
    const updatedPosition = formData.get("position");
    let validationErrors2 = {};

    if (!updatedPlace) {
      validationErrors2.place = "Place is required";
    }
    if (!updatedDepartment) {
      validationErrors2.department = "Department is required";
    }
    if (!updatedDateFrom) {
      validationErrors2.dateFrom = "Start date is required";
    }
    if (!updatedDateTo && !isPresent) {
      validationErrors2.dateTo = "End date is required or mark as Present";
    }
    if (!updatedPosition) {
      validationErrors2.position = "Position is required";
    }

    if (Object.keys(validationErrors2).length > 0) {
      setErrors(validationErrors2);
      return;
    }

    updateExperience({
      id: singleExperienceId,
      place: updatedPlace,
      department: updatedDepartment,
      dateFrom: updatedDateFrom,
      dateTo: updatedDateTo || null,
      position: updatedPosition,
    });
    handleClose2();
  };

  const handleDelete = (id) => {
    deleteExperience(id);
  };

  const handleClose = () => {
    setErrors({});
    handleArticleClick();
  };
  const handleClose2 = () => {
    setErrors({});
    handleUpdateArticleClick();
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newPlace = formData.get("place");
    const newDepartment = formData.get("department");
    const newDateFrom = formData.get("dateFrom");
    const newDateTo = isPresent ? null : formData.get("dateTo");
    const newPosition = formData.get("position");
    let validationErrors = {};

    if (!newPlace) {
      validationErrors.place = "Place is required";
    }
    if (!newDepartment) {
      validationErrors.department = "Department is required";
    }
    if (!newDateFrom) {
      validationErrors.dateFrom = "Start date is required";
    }
    if (!newDateTo && !isPresent) {
      validationErrors.dateTo = "End date is required or mark as Present";
    }
    if (!newPosition) {
      validationErrors.position = "Position is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    addExperience({
      dateTo: newDateTo,
      dateFrom: newDateFrom,
      place: newPlace,
      department: newDepartment,
      position: newPosition,
    });

    console.log(validationErrors);
    handleClose();
  };

  if (isLoading) return <ExperienceSkeleton count={5} />;
  if (isError) return <ErrorDisplay errorMsg={error.message} />;

  return (
    <div className="flex flex-col items-center bg-[#FFF] shadow-[custom-light] py-[40px]">
      <ExperienceList
        data={data}
        handleUpdateModal={handleUpdateModal}
        handleDelete={handleDelete}
        circleIcon={circleIcon}
      />

      <ExperienceForm
        handleAddSubmit={handleAddSubmit}
        handleClose={handleClose}
        handleClose2={handleClose2}
        errors={errors}
        isPresent={isPresent}
        setIsPresent={setIsPresent}
        handleUpdateExperience={handleUpdateExperience}
        singleExperienceById={singleExperienceById}
        place={
          (singleExperienceById &&
            singleExperienceById.data &&
            singleExperienceById.data.place) ||
          ""
        }
        department={
          (singleExperienceById &&
            singleExperienceById.data &&
            singleExperienceById.data.department) ||
          ""
        }
        dateFrom={
          (singleExperienceById &&
            singleExperienceById.data &&
            singleExperienceById.data.from) ||
          ""
        }
        dateTo={
          (singleExperienceById &&
            singleExperienceById.data &&
            singleExperienceById.data.to) ||
          ""
        }
        position={
          (singleExperienceById &&
            singleExperienceById.data &&
            singleExperienceById.data.position) ||
          ""
        }
        showModal={showModal}
        showUpdateModal={showUpdateModal}
      />

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
