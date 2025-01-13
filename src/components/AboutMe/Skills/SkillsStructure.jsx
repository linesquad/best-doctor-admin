import { useGetSkills } from "../../../hooks/useSkills/useGetSkills"


function SkillsStructure() {
  const {data,isLoading,error,isError} = useGetSkills()
  console.log(data)
  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error: {error.message}</div>
  return (
    <div>SkillsStructure</div>
  )
}

export default SkillsStructure