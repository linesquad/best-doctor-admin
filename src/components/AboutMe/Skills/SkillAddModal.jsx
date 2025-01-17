import ReusableAddModal from "../../ReusableAbout/ReusableAddModal";

function SkillAddModal({ handleAddSubmit, handleAddCancel, showAddModal }) {
  return (
    <div>
      <ReusableAddModal
        title="Add New Skill"
        showAddModal={showAddModal}
        fields={[
          {
            label: "Skill Name",
            name: "skill",
            type: "text",
            placeholder: "Enter skill name",
          },
          {
            label: "Description",
            name: "description",
            type: "textarea",
            placeholder: "Enter skill description",
          },
        ]}
        onSubmit={handleAddSubmit}
        onCancel={handleAddCancel}
      />
    </div>
  );
}

export default SkillAddModal;
