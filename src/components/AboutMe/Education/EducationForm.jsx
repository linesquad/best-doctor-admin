import EducationAddModal from "./EducationAddModal";
("../Experience/ExperienceUpdateModal");

function EducationForm({
  handleSubmit,
  handleClose,
  errors,
  isPresent,
  setIsPresent,
  // handleEducationUpdate,
  singleEducationId,
  showModal2,
  to,
  from,
  degree,
  uni,
}) {
  return (
    <>
      <EducationAddModal
        handleClose={handleClose}
        errors={errors}
        isPresent={isPresent}
        setIsPresent={setIsPresent}
        singleEducationId={singleEducationId}
        handleSubmit={handleSubmit}
        showModal2={showModal2}
      />

      {/* <ExperienceUpdateModal
        handleClose2={handleClose2}
        errors={errors}
        isPresent={isPresent}
        setIsPresent={setIsPresent}
        singleExperienceById={singleExperienceById}
        handleUpdateExperience={handleUpdateExperience}
        place={place}
        department={department}
        dateFrom={dateFrom}
        dateTo={dateTo}
        position={position}
        showUpdateModal={showUpdateModal}
      /> */}
    </>
  );
}

export default EducationForm;
