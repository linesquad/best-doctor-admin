import { useAddSkills } from "../../../hooks/useSkills/useAddSkills"
import { useGetSkills } from "../../../hooks/useSkills/useGetSkills"


function SkillsStructure() {
  const {data,isLoading,error,isError} = useGetSkills()
  const {mutate:addSkills} = useAddSkills()

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const skill = formData.get("skill");
    const description = formData.get("description");
    addSkills({ skill, description });
  };
  console.log(data)
  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error: {error.message}</div>
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="skill" placeholder="Skill" />
        <input type="text" name="description" placeholder="Description" />
        <button type="submit">Add Skill</button>
      </form>
    </div>
  )
}

export default SkillsStructure