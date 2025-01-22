import ReusableAnarAddModal from "../../ReusableAbout/ReusableAnarAddModal";

function EducationAddModal({
  handleClose,
  errors,
  isPresent,
  setIsPresent,
  singleEducationId,
  handleSubmit,
  showModal2,
}) {
  return (
    <ReusableAnarAddModal
      title={singleEducationId ? "Update Education" : "Add New Education"}
      fields={[
        {
          name: "uni",
          label: "uni", // Matches the field in EducationForm
          placeholder: "Enter university",
          type: "text",
          defaultValue: singleEducationId ? singleEducationId.data.uni : "", // Adjusted for university data
        },
        {
          name: "degree",
          label: "degree", // Matches the field in EducationForm
          placeholder: "Enter degree",
          type: "text",
          defaultValue: singleEducationId ? singleEducationId.data.degree : "", // Adjusted for degree data
        },
        {
          name: "from",
          label: "Date From :",
          type: "date",
          defaultValue: singleEducationId ? singleEducationId.data.from : "", // Adjusted for dateFrom
        },
        {
          name: "to",
          label: "Date To:",
          type: "date",
          defaultValue: singleEducationId ? singleEducationId.data.to : "", 
          disabled: isPresent,
        },
        {
          name: "present",
          label: "Present",
          type: "checkbox",
          checked: isPresent,
          onChange: (e) => setIsPresent(e.target.checked),
        },
      ]}
      onSubmit={handleSubmit}
      handleClose={handleClose}
      showModal={showModal2}
      errors={errors}
      isPresent={isPresent}
    />
  );
}

export default EducationAddModal;
