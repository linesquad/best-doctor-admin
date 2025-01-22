import { useState } from "react";

import EducationList from "./EducationList.jsx";
import EducationSkeleton from "./EducationSkeleton.jsx";
import useAddAboutMeEducation from "../../../hooks/useEducation/useAddAboutMeEducation.js";
import { useDeleteAboutMeEducation } from "../../../hooks/useEducation/useDeleteAboutMeEducation.js";
import useGetAboutMeEducation from "../../../hooks/useEducation/useGetAboutMeEducation.js";
import { useGetEducationById } from "../../../hooks/useEducation/useGetEducationById.js";
import useUpdateAboutMeEducation from "../../../hooks/useEducation/useUpdateAboutMeEducation.js";
import CustomButton from "../../../ui/CustomButton";
import ErrorDisplay from "../../ErrorDisplay.jsx";
import EducationForm from "../Education/EducationForm.jsx";

function AboutMeEducation() {
  const [showModal2, setShowModal2] = useState(false);
  const [showUpdateModal2, setShowUpdateModal2] = useState(false);

  const handleArticleClick2 = () => {
    setShowModal2((prev) => !prev);
  };

  const [educationById, setEducationById] = useState(null);
  const { mutate: addEducation } = useAddAboutMeEducation();
  const { mutate: deleteEducation } = useDeleteAboutMeEducation();
  const { data, error, isLoading, isError } = useGetAboutMeEducation();
  const { mutate: updateEducation } = useUpdateAboutMeEducation();
  const { data: singleEducationId } = useGetEducationById(educationById);
  console.log(data);
  let validationErrors2 = {};

  const [errors, setErrors] = useState({});
  const [isPresent, setIsPresent] = useState(false);

  const handleDelete = (id) => {
    deleteEducation(id);
  };
  const handleModalUpdate = (id) => {
    setEducationById(id);
    handleArticleClick2();
  };
  const handleEducationUpdate = (e) => {
    const formData = new FormData(e.target);
    console.log(formData);

    const updateUni = formData.get("uni");
    const updateDegree = formData.get("degree");
    const updateDateFrom = formData.get("from");
    const updateTo = isPresent ? null : formData.get("to");

    if (!updateDegree) {
      validationErrors2.degree = "Degree is required";
    }
    if (!updateDateFrom) {
      validationErrors2.from = "Start date is required";
    }
    if (!updateTo && !isPresent) {
      validationErrors2.to = "End date is required or mark as Present";
    }
    if (!updateUni) {
      validationErrors2.uni = "University is required";
    }

    if (Object.keys(validationErrors2).length > 0) {
      setErrors(validationErrors2);
      return;
    }

    updateEducation({
      id: educationById,
      to: updateTo,
      from: updateDateFrom,
      degree: updateDegree,
      uni: updateUni,
    });
    handleClose();
  };

  const handleClose = () => {
    setErrors({});
    handleArticleClick2();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);

    const newUni = formData.get("uni");
    const newDegree = formData.get("degree");
    const newDateFrom = formData.get("from");
    const newTo = isPresent ? null : formData.get("to");
    let validationErrors = {};
    if (!newDegree) {
      validationErrors.degree = "Degree is required";
    }
    if (!newDateFrom) {
      validationErrors.from = "Start date is required";
    }
    if (!newTo && !isPresent) {
      validationErrors.to = "End date is required or mark as Present";
    }
    if (!newUni) {
      validationErrors.uni = "University is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    addEducation({
      to: newTo,
      from: newDateFrom,
      uni: newUni,
      degree: newDegree,
    });

    handleClose();
  };

  if (isLoading) return <EducationSkeleton count={5} />;
  if (isError) return <ErrorDisplay errorMsg={error.message} />;

  return (
    <div className="flex flex-col items-center bg-[#FFF] shadow-[custom-light] py-[40px]">
      <EducationList
        data={data.data}
        handleModalUpdate={handleModalUpdate}
        handleDelete={handleDelete}
      />

      <EducationForm
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        errors={errors}
        isPresent={isPresent}
        setIsPresent={setIsPresent}
        handleEducationUpdate={handleEducationUpdate}
        singleEducationId={singleEducationId}
        showModal2={showModal2}
        to={singleEducationId?.data.to}
        from={singleEducationId?.data.from}
        degree={singleEducationId?.data.degree}
        uni={singleEducationId?.data.uni}
        showUpdateModal2={showUpdateModal2}
      />

      <CustomButton
        name={"Add New Education"}
        color={"text-[#CBDEEF]"}
        bg={"bg-[#004682]"}
        paddingX={"px-4"}
        paddingY={"py-3"}
        textSize={"text-[17px]"}
        onClick={handleArticleClick2}
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

export default AboutMeEducation;
