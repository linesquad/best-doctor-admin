import ReusableAddModal from "../../ReusableAbout/ReusableAddModal";

function AwardsAddModal({ handleAddAwards, showAddModal, handleAddCancel }) {
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
      />
    </div>
  );
}

export default AwardsAddModal;
