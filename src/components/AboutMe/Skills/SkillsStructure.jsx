import { useGetSkills } from "../../../hooks/useSkills/useGetSkills";
import { useUpdateSkills } from "../../../hooks/useSkills/useUpdateSkills";

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="skill"
          defaultValue={skill}
          placeholder="Skill"
        />
        <input
          type="text"
          name="description"
          defaultValue={description}
          placeholder="Description"
        />
        <button type="submit">Update Skill</button>
      </form>
    </div>
  );
}

export default SkillsStructure;
