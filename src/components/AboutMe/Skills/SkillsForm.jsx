

function SkillsForm({handleSubmit,skill,description}) {
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
  )
}

export default SkillsForm