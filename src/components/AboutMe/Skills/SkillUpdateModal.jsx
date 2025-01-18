import ReusableUpdateModal from "../../ReusableAbout/ReusableUpdateModal";

function SkillUpdateModal({ showUpdateModal, handleUpdate, handleCancel, skill,description,errors }) {
  return (
    <div>
      <ReusableUpdateModal
        title="Update Skill"
        showUpdateModal={showUpdateModal}
        fields={[
          {
            label: "Skill Name",
            defaultValue: skill, 
            name: "skill",
            type: "text",
            placeholder: "Enter Skill name",
          },
          {
            label: "Skill Description",
            defaultValue: description, 
            name: "description",
            type: "textarea",
            placeholder: "Enter Skill description",
          },
        ]}
        onCancel={handleCancel}
        onSubmit={handleUpdate}
        errors={errors}
      />
    </div>
  );
}

export default SkillUpdateModal;
