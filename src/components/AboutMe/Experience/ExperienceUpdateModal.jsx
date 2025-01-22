import ReusableAnarUpdateModal from "../../ReusableAbout/ReusableAnarUpdateModal";

function ExperienceUpdateModal({
  handleClose2,
  errors,
  isPresent,
  setIsPresent,
  handleUpdateExperience,
  place,
  department,
  dateFrom,
  dateTo,
  position,
  showUpdateModal,
}) {
  return (
    <ReusableAnarUpdateModal
      handleClose2={handleClose2}
      errors={errors}
      isPresent={isPresent}
      setIsPresent={setIsPresent}
      handleUpdateExperience={handleUpdateExperience}
      place={place}
      department={department}
      dateFrom={dateFrom}
      dateTo={dateTo}
      position={position}
      showUpdateModal={showUpdateModal}
    />
  );
}

export default ExperienceUpdateModal;
