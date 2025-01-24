import ReusableAnarAddModal from "../../ReusableAbout/ReusableAnarAddModal";

function EducationAddModal({
  handleClose,
  errors,
  isPresent,
  setIsPresent,
  // singleEducationId,
  handleSubmit,
  showModal2,
}) {
  return (
    <ReusableAnarAddModal
      fields={[
        {
          name: "uni",
          label: "uni",
          placeholder: "Enter university",
          type: "text",
        },
        {
          name: "degree",
          label: "degree",
          placeholder: "Enter degree",
          type: "text",
        },
        {
          name: "from",
          label: "Date From ",
          type: "date",
        },
        {
          name: "to",
          label: "Date To",
          type: "date",
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
      title="Add New Education"
      onSubmit={handleSubmit}
      handleClose={handleClose}
      showModal={showModal2}
      errors={errors}
      isPresent={isPresent}
    />
  );
}

export default EducationAddModal;
