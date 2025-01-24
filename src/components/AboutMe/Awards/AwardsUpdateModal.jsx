import ReusableUpdateModal from "../../ReusableAbout/ReusableUpdateModal";

function AwardsUpdateModal({
  handleUpdateCancel,
  handleUpdateAwards,
  showUpdateModal,
  name,
  date,
  awardedBy,
  errors,
}) {
  return (
    <div>
      <ReusableUpdateModal
        title="Update Award"
        showUpdateModal={showUpdateModal}
        fields={[
          {
            label: "Award Name",
            defaultValue: name,
            name: "name",
            type: "text",
            placeholder: "Enter Award name",
          },
          {
            label: "Award Date",
            defaultValue: date,
            name: "date",
            type: "date",
            placeholder: "Enter Award Date",
          },
          {
            label: "Awarded By",
            defaultValue: awardedBy,
            name: "awarded",
            type: "text",
            placeholder: "Enter Awarded By",
          },
        ]}
        onCancel={handleUpdateCancel}
        onSubmit={handleUpdateAwards}
        errors={errors}
      />
    </div>
  );
}

export default AwardsUpdateModal;
