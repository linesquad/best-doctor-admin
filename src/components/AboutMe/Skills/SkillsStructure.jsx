import { useState } from "react";

import SkillsForm from "./SkillsForm";
import SkillsList from "./SkillsList";
import { useGetSkills } from "../../../hooks/useSkills/useGetSkills";
import { useUpdateSkills } from "../../../hooks/useSkills/useUpdateSkills";
import ReusableTitle from "../../ReusableTitle";
function SkillsStructure() {
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const { data, isLoading, error, isError } = useGetSkills();
  const { mutate: updateSkills } = useUpdateSkills();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const { id, description, skill } = data.skill[0] || {};
  const handleUpdateModal = () => {
    setShowUpdateModal(prev => !prev)
  }
  const handleCancel = () => {
    setShowUpdateModal(prev => !prev) 
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const skill = formData.get("skill");
    const description = formData.get("description");
    updateSkills({ id: id, skill, description });
    handleCancel()
  };
  console.log(data);
  return (
    <div>
      <ReusableTitle
        title={"Skills"}
        size={"text-[3rem]"}
        color={"text-black"}
        fontWeight={"font-bold"}
      />
      <SkillsList data={data} skill={skill} description={description} handleUpdateModal={handleUpdateModal}  />
      <SkillsForm
        handleUpdate={handleUpdate}
        skill={skill}
        description={description}
        showUpdateModal={showUpdateModal}
        setShowUpdateModal={setShowUpdateModal}
        handleUpdateModal={handleUpdateModal}
        handleCancel={handleCancel}
      />
    </div>
  );
}

export default SkillsStructure;
