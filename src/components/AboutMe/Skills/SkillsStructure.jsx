import SkillsForm from "./SkillsForm";
import SkillsList from "./SkillsList";
import { useGetSkills } from "../../../hooks/useSkills/useGetSkills";
import { useUpdateSkills } from "../../../hooks/useSkills/useUpdateSkills";
import ReusableTitle from "../../ReusableTitle";
function SkillsStructure() {
  const { data, isLoading, error, isError } = useGetSkills();
  const { mutate: updateSkills } = useUpdateSkills();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const { id, description, skill } = data.skill[0] || {};
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const skill = formData.get("skill");
    const description = formData.get("description");
    updateSkills({ id: id, skill, description });
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
      <SkillsList data={data} skill={skill} description={description} />
      <SkillsForm
        handleSubmit={handleSubmit}
        skill={skill}
        description={description}
      />
    </div>
  );
}

export default SkillsStructure;
