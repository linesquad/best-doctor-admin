import ReusableAddModal from "../../ReusableAbout/ReusableAddModal";

function SkillAddModal({ handleAddSubmit, handleAddCancel, showAddModal,errors }) {
  return (
    <div>
      <ReusableAddModal
  title="Add New Skill"
  fields={[
    { name: "skill", label: "Skill", placeholder: "Enter skill name", type: "text" },
    { name: "description", label: "Description", placeholder: "Enter skill description", type: "textarea" },
  ]}
  onSubmit={handleAddSubmit}
  onCancel={handleAddCancel}
  showAddModal={showAddModal}
  errors={errors}
/>
    </div>
  );
}

export default SkillAddModal;
