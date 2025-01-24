import EducationAddModal from "./EducationAddModal";
import EducationUpdateModal from "./EducationUpdateModal";
("../Experience/ExperienceUpdateModal");

function EducationForm({
  handleSubmit,
  handleClose,
  errors,
  isPresent,
  setIsPresent,
  handleEducationUpdate,
  singleEducationId,
  showModal2,
  to,
  from,
  degree,
  uni,
  showUpdateModal2,
  handleClose2,
}) {
  return (
    <>
      <EducationAddModal
        handleClose={handleClose}
        errors={errors}
        isPresent={isPresent}
        setIsPresent={setIsPresent}
        // singleEducationId={singleEducationId}
        handleSubmit={handleSubmit}
        showModal2={showModal2}
      />

      <EducationUpdateModal
        handleClose2={handleClose2}
        errors={errors}
        isPresent={isPresent}
        setIsPresent={setIsPresent}
        singleEducationId={singleEducationId}
        handleEducationUpdate={handleEducationUpdate}
        degree={degree}
        dateFrom={from}
        dateTo={to}
        uni={uni}
        showUpdateModal2={showUpdateModal2}
      />
    </>
  );
}

export default EducationForm;
