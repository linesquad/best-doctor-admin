import { useState } from "react";

import SkillsForm from "./SkillsForm";
import SkillsList from "./SkillsList";
import SkillsSkeleton from "./SkillsSkeleton";
import { useAddSkills } from "../../../hooks/useSkills/useAddSkills";
import { useDeleteSkill } from "../../../hooks/useSkills/useDeleteSkills";
import { useGetSkills } from "../../../hooks/useSkills/useGetSkills";
import { useUpdateSkills } from "../../../hooks/useSkills/useUpdateSkills";

function SkillsStructure() {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [errors, setErrors] = useState({ skill: "", description: "" });

  const { data, isLoading, error, isError } = useGetSkills();
  const { mutate: updateSkills } = useUpdateSkills();
  const { mutate: addSkills } = useAddSkills();
  const { mutate: deleteSkill } = useDeleteSkill();

  if (isLoading) return <div><SkillsSkeleton /></div>;
  if (isError) return <div>Error: {error.message}</div>;

  // Validate input
  const validateInput = (skill, description) => {
    const errors = {};
    if (!skill) errors.skill = "Skill is required.";
    if (!description) errors.description = "Description is required.";
    return errors;
  };

  // Update functionality
  const handleUpdateModal = (skill) => {
    setSelectedSkill(skill);
    setShowUpdateModal(true);
  };

  const handleCancel = () => {
    setShowUpdateModal(false);
    setSelectedSkill(null);
    setErrors({ skill: "", description: "" });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedSkill = formData.get("skill");
    const updatedDescription = formData.get("description");

    const validationErrors = validateInput(updatedSkill, updatedDescription);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (selectedSkill) {
      updateSkills({
        id: selectedSkill.id,
        skill: updatedSkill,
        description: updatedDescription,
      });
    }
    handleCancel();
  };

  // Add functionality
  const handleAddCancel = () => {
    setShowAddModal(false);
    setErrors({ skill: "", description: "" });
  };

   

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newSkill = formData.get("skill");
    const newDescription = formData.get("description");

    const validationErrors = validateInput(newSkill, newDescription);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    addSkills({ skill: newSkill, description: newDescription });
    handleAddCancel();
  };


  // Delete functionality
  const handleDelete = (id) => {
    deleteSkill(id);
  };

  return (
    <div>
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
        errors={errors}
      />
    </div>
  );
}


export default SkillsStructure;
