import ReusableAnarAddModal from "../../ReusableAbout/ReusableAnarAddModal";

function ExperienceAddModal({
  handleClose,
  errors,
  isPresent,
  setIsPresent,
  handleAddSubmit,
  showModal,
}) {
  return (
    <ReusableAnarAddModal
      title="Add New Experience"
      fields={[
        {
          name: "place",
          label: "Place",
          placeholder: "Enter place",
          type: "text",
        },
        {
          name: "department",
          label: "Department",
          placeholder: "Enter department",
          type: "text",
        },
        { name: "dateFrom", label: "Date From", type: "date" },
        { name: "dateTo", label: "Date To", type: "date" },
        {
          name: "present",
          label: "Present",
          type: "checkbox",
          checked: isPresent,
          onChange: (e) => setIsPresent(e.target.checked),
        },
        {
          name: "position",
          label: "Position",
          placeholder: "Enter position",
          type: "text",
        },
      ]}
      onSubmit={handleAddSubmit}
      handleClose={handleClose}
      showModal={showModal}
      errors={errors}
      isPresent={isPresent}
    />
  );
}

export default ExperienceAddModal;
