import ReusableAnarUpdateModal from "../../ReusableAbout/ReusableAnarUpdateModal";

function EducationUpdateModal({
  handleClose2,
  errors,
  isPresent,
  setIsPresent,
  handleEducationUpdate,
  degree,
  dateFrom,
  dateTo,
  uni,
  showUpdateModal2,
}) {
  const fields = [
    {
      name: "uni",
      label: "uni",
      type: "text",
      defaultValue: uni,
    },
    {
      name: "degree",
      label: "degree",
      type: "text",
      defaultValue: degree,
    },
    {
      name: "from",
      label: "Date From",
      type: "date",
      defaultValue: dateFrom,
    },
    {
      name: "to",
      label: "Date To",
      type: "date",
      defaultValue: dateTo,
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
      title="Update Education"
      fields={fields}
      onSubmit={handleEducationUpdate}
      handleClose={handleClose2}
      showUpdateModal={showUpdateModal2}
      errors={errors}
      isPresent={isPresent}
      setIsPresent={setIsPresent}
    />
  );
}

export default EducationUpdateModal;
