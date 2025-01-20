import { useEffect, useState } from "react";
import { MdModeEdit } from "react-icons/md";

import EducationSkeleton from "./EducationSkeleton.jsx";

import educationIcon from "/images/education_Icon.svg";

import useAddAboutMeEducation from "../../../hooks/useEducation/useAddAboutMeEducation.js";
import { useDeleteAboutMeEducation } from "../../../hooks/useEducation/useDeleteAboutMeEducation.js";
import useGetAboutMeEducation from "../../../hooks/useEducation/useGetAboutMeEducation.js";
import { useGetEducationById } from "../../../hooks/useEducation/useGetEducationById.js";
import useUpdateAboutMeEducation from "../../../hooks/useEducation/useUpdateAboutMeEducation.js";
import CustomButton from "../../../ui/CustomButton";
import ErrorDisplay from "../../ErrorDisplay.jsx";
import Modal from "../../Modal";
import EducationForm from "../Education/EducationForm.jsx";

function AboutMeEducation({ showModal2, handleArticleClick2 }) {
  const [educationById, setEducationById] = useState(null);
  const { mutate: addEducation } = useAddAboutMeEducation();
  const { mutate: deleteEducation } = useDeleteAboutMeEducation();
  const { data, error, isLoading, isError } = useGetAboutMeEducation();
  const { mutate: updateEducation } = useUpdateAboutMeEducation();
  const { data: singleEducationId } = useGetEducationById(educationById);


  const [education, setEducation] = useState({
    degree: "",
    from: "",
    to: "",
    uni: "",

  });

  const [errors, setErrors] = useState({});
  const [isPresent, setIsPresent] = useState(false);

  const handleDelete = (id) => {
    deleteEducation(id);
  };
  const handleModalUpdate = (id) => {
    setEducationById(id);
    handleArticleClick2();
  };
  const handleEducationUpdate = () => {
    updateEducation({
      id: educationById,
      degree: education.degree,
      from: education.from,
      to: education.to,
      uni: education.uni,
    });
    handleArticleClick2();
  };

  useEffect(() => {
    if (singleEducationId) {
      setEducation({
        degree: singleEducationId.data.degree || "",
        from: singleEducationId.data.from || "",
        to: singleEducationId.data.to || "",
        uni: singleEducationId.data.uni || "",
      });
    }
  }, [singleEducationId]);

  const handleClose = () => {
    setEducation({
      degree: "",
      from: "",
      to: "",
      uni: "",
    });
    setErrors({});
    handleArticleClick2();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (!education.degree) {
      validationErrors.degree = "Degree is required";
    }
    if (!education.from) {
      validationErrors.from = "Start date is required";
    }
    if (!education.to && !isPresent) {
      validationErrors.to = "End date is required or mark as Present";
    }
    if (!education.uni) {
      validationErrors.uni = "University is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const educationToSubmit = {
      ...education,
      to: isPresent ? null : education.to,
    };

    addEducation(educationToSubmit);

    handleClose();
  };

  if (isLoading) return <EducationSkeleton count={5} />;
    if (isError) return <ErrorDisplay errorMsg={error.message} />;


  return (
    <div className="flex flex-col items-center bg-[#FFF] shadow-[custom-light] py-[40px]">
      <div className="flex justify-start w-full">
        <h1 className="font-poppinsBold text-[40px] leading-[130%] tracking-[-0.4px]">
          Education
        </h1>
      </div>

      <div className="flex flex-col w-full gap-3 mt-3">
        {Array.isArray(data.data) &&
          data.data.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-[16px] border rounded-lg"
            >
              {/* Container for image and content */}
              <div className="flex items-start w-full gap-4">
                {/* Image on the left */}
                <div className="bg-softBlue w-5 h-5 flex justify-center items-center rounded-lg">
                  <img src={educationIcon} alt="educationIcon" />
                </div>

                {/* Content on the right */}
                <div className="flex flex-col">
                  <h2 className="font-poppinsExtraBold leading-[135%] ">
                    {item.uni}
                  </h2>
                  <div className="flex gap-4">
                    <h3 className="font-poppinsExtraBold ">Timeline</h3>
                    <span className="font-heeboRegular opacity-50">{`${item.from.slice(
                      0,
                      4
                    )} - ${item.to ? item.to.slice(0, 4) : "Present"}`}</span>
                  </div>
                  <h3 className="font-poppinsExtraBold ">{item.degree}</h3>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <MdModeEdit
                  size={30}
                  color="#0077DD"
                  className="cursor-pointer transition-transform duration-200 hover:scale-125"
                  onClick={() => handleModalUpdate(item.id)}
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

      {showModal2 && (
        <Modal>
          <EducationForm
            education={education}
            setEducation={setEducation}
            onSubmit={handleSubmit}
            handleClose={handleClose}
            errors={errors}
            isPresent={isPresent}
            setIsPresent={setIsPresent}
            handleEducationUpdate={handleEducationUpdate}
            singleEducationId={singleEducationId}
          />
        </Modal>
      )}

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
