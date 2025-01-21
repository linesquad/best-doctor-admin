import ExperienceAddModal from "./ExperienceAddModal";
import ExperienceUpdateModal from "./ExperienceUpdateModal";

function ExperienceForm({
  handleClose,
  errors,
  isPresent,
  setIsPresent,
  handleUpdateExperience,
  singleExperienceById,
  handleAddSubmit,
  place,
  department,
  dateFrom,
  dateTo,
  position,
  showModal,
  showUpdateModal,
  handleClose2,
}) {
  console.log(singleExperienceById);
  console.log(errors);

  return (
    <>
      {showModal && (
        <ExperienceAddModal
          handleClose={handleClose}
          errors={errors}
          isPresent={isPresent}
          setIsPresent={setIsPresent}
          singleExperienceById={singleExperienceById}
          handleAddSubmit={handleAddSubmit}
        />
      )}

      {showUpdateModal && (
        <ExperienceUpdateModal
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
        />
      )}
    </>
  );
}

export default ExperienceForm;
