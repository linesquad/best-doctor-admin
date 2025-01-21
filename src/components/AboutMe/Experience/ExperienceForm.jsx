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

}) {
  console.log(singleExperienceById);
  console.log(errors);

  return (
    <>
      <ExperienceAddModal
        handleClose={handleClose}
        errors={errors}
        isPresent={isPresent}
        setIsPresent={setIsPresent}
        singleExperienceById={singleExperienceById}
        handleAddSubmit={handleAddSubmit}
      />

      <ExperienceUpdateModal
        handleClose={handleClose}
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
    </>
  );
}

export default ExperienceForm;
