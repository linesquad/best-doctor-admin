import { useState } from "react";

import SkillsForm from "./SkillsForm";
import SkillsList from "./SkillsList";
import { useAddSkills } from "../../../hooks/useSkills/useAddSkills";
import { useDeleteSkill } from "../../../hooks/useSkills/useDeleteSkills";
import { useGetSkills } from "../../../hooks/useSkills/useGetSkills";
import { useUpdateSkills } from "../../../hooks/useSkills/useUpdateSkills";
import ReusableTitle from "../../ReusableTitle";

function SkillsStructure() {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const { data, isLoading, error, isError } = useGetSkills();
  const { mutate: updateSkills } = useUpdateSkills();
  const { mutate: addSkills } = useAddSkills();
  const {mutate: deleteSkill} = useDeleteSkill()

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  //Update functionality
  const handleUpdateModal = (skill) => {
    setSelectedSkill(skill);
    setShowUpdateModal(true);
  };

  const handleCancel = () => {
    setShowUpdateModal(false);
    setSelectedSkill(null);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedSkill = formData.get("skill");
    const updatedDescription = formData.get("description");

    if (selectedSkill) {
      updateSkills({
        id: selectedSkill.id,
        skill: updatedSkill,
        description: updatedDescription,
      });
    }
    handleCancel();
  };

  //Add functionality
  const handleAddCancel = () => {
    setShowAddModal(false);
  };
  const handleAddSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newSkill = formData.get("skill");
    const newDescription = formData.get("description");
    addSkills({ skill: newSkill, description: newDescription });
    handleAddCancel();
  };

  //Delete functionality
  const handleDelete = (id) => {
    deleteSkill(id);
  };

  return (
    <div>
      <ReusableTitle
        title={"Skills"}
        size={"text-[3rem]"}
        color={"text-black"}
        fontWeight={"font-bold"}
      />
      <SkillsList data={data.skill} handleUpdateModal={handleUpdateModal} handleDelete={handleDelete} />
      <SkillsForm
        handleUpdate={handleUpdate}
        skill={selectedSkill?.skill || ""}
        description={selectedSkill?.description || ""}
        showUpdateModal={showUpdateModal}
        handleCancel={handleCancel}
        handleAddSubmit={handleAddSubmit}
        handleAddCancel={handleAddCancel}
        showAddModal={showAddModal}
        setShowAddModal={setShowAddModal}
      />
    </div>
  );
}

export default SkillsStructure;
