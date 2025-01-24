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
  const fields = [
    {
      name: "place",
      label: "Place",
      type: "text",
      defaultValue: place,
    },
    {
      name: "department",
      label: "Department",
      type: "text",
      defaultValue: department,
    },
    {
      name: "dateFrom",
      label: "Date From",
      type: "date",
      defaultValue: dateFrom,
    },
    {
      name: "dateTo",
      label: "Date To",
      type: "date",
      defaultValue: dateTo,
    },
    {
      name: "position",
      label: "Position",
      type: "text",
      defaultValue: position,
    },
    {
      name: "present",
      label: "Present",
      type: "checkbox",
      checked: isPresent,
      onChange: (e) => setIsPresent(e.target.checked),
    },
  ];

  return (
    <ReusableAnarUpdateModal
      title="Update Experience"
      fields={fields}
      onSubmit={handleUpdateExperience}
      handleClose={handleClose2}
      showUpdateModal={showUpdateModal}
      errors={errors}
      isPresent={isPresent}
      setIsPresent={setIsPresent}
    />
  );
}

export default ExperienceUpdateModal;
