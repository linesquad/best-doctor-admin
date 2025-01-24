import SkillAddModal from "./SkillAddModal";
import SkillUpdateModal from "./SkillUpdateModal";
import CustomButton from "../../../ui/CustomButton";

function SkillsForm({
  handleUpdate,
  skill,
  description,
  showUpdateModal,
  handleCancel,
  handleAddSubmit,
  setShowAddModal,
  handleAddCancel,
  showAddModal,
  errors,
}) {
  return (
    <div className="mt-8 flex justify-center">
      <CustomButton
        name="Add New Skill"
        color="text-lightGrey"
        weight={"font-normal"}
        bg="bg-darkBlue"
        paddingX="px-10"
        paddingY="py-3"
        rounded="rounded-[3rem]"
        maxW={"w-full lg:w-[30rem]"}
        onClick={() => setShowAddModal(true)}
        scale={"hover:scale-105"}
      />

      <SkillAddModal
        handleAddSubmit={handleAddSubmit}
        handleAddCancel={handleAddCancel}
        showAddModal={showAddModal}
        errors={errors}
      />

      <SkillUpdateModal
        handleUpdate={handleUpdate}
        skill={skill}
        description={description}
        showUpdateModal={showUpdateModal}
        handleCancel={handleCancel}
        errors={errors}
      />
    </div>
  );
}

export default SkillsForm;


