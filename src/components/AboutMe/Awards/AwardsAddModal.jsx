import ReusableAddModal from "../../ReusableAbout/ReusableAddModal";

function AwardsAddModal({ handleAddAwards, showAddModal, handleAddCancel,errors }) {
  return (
    <div>
      <ReusableAddModal
        title="Add New Award"
        showAddModal={showAddModal}
        fields={[
          { label: "Award Name", name: "name", type: "text", placeholder: "Enter Award name" },
          { label: "Date", name: "date", type: "date" },
          { label: "Awarded By", name: "awarded", type: "textarea", placeholder: "Awarded By" },
        ]}
        onSubmit={handleAddAwards}
        onCancel={handleAddCancel}
        errors={errors}
      />
    </div>
  );
}

export default AwardsAddModal;
