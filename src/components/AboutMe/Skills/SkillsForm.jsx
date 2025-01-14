import CustomButton from "../../../ui/CustomButton";
import Modal from "../../Modal";

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
}) {
  return (
    <div className="mt-8 flex justify-center">
      <CustomButton
        name="Add New Skill"
        color="text-white"
        bg="bg-lightBlue hover:bg-brightBlue"
        paddingX="px-6"
        paddingY="py-3"
        rounded="rounded-lg"
        maxW={"w-full lg:w-[30rem]"}
        onClick={() => setShowAddModal(true)}
      />

      {showAddModal && (
        <Modal>
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-[90%] max-w-md">
              <h2 className="text-2xl font-bold text-darkBlue text-center mb-8">
                Add New Skill
              </h2>

              <form onSubmit={handleAddSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Skill Name
                  </label>
                  <input
                    type="text"
                    name="skill"
                    placeholder="Enter skill name"
                    className="w-full px-4 py-3 border-2 border-pastelBlue rounded-lg focus:ring-2 focus:ring-brightBlue focus:border-brightBlue transition duration-200 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    placeholder="Enter skill description"
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-pastelBlue rounded-lg focus:ring-2 focus:ring-brightBlue focus:border-brightBlue transition duration-200 outline-none resize-none"
                  />
                </div>

                <div className="flex justify-end gap-4 pt-4">
                  <CustomButton
                    name="Cancel"
                    color="text-darkBlue"
                    bg="bg-crystalBlue hover:bg-pastelBlue"
                    paddingX="px-6"
                    paddingY="py-2.5"
                    rounded="rounded-lg"
                    type="button"
                    onClick={handleAddCancel}
                  />

                  <CustomButton
                    name="Add Skill"
                    color="text-white"
                    bg="bg-brightBlue hover:bg-oceanBlue"
                    paddingX="px-6"
                    paddingY="py-2.5"
                    rounded="rounded-lg"
                    type="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </Modal>
      )}

      {showUpdateModal && (
        <Modal>
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-[90%] max-w-md">
              <h2 className="text-2xl font-bold text-darkBlue text-center mb-8">
                Update Skill
              </h2>

              <form onSubmit={handleUpdate} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Skill Name
                  </label>
                  <input
                    type="text"
                    name="skill"
                    defaultValue={skill}
                    placeholder="Enter skill name"
                    className="w-full px-4 py-3 border-2 border-pastelBlue rounded-lg focus:ring-2 focus:ring-brightBlue focus:border-brightBlue transition duration-200 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    defaultValue={description}
                    placeholder="Enter skill description"
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-pastelBlue rounded-lg focus:ring-2 focus:ring-brightBlue focus:border-brightBlue transition duration-200 outline-none resize-none"
                  />
                </div>

                <div className="flex justify-end gap-4 pt-4">
                  <CustomButton
                    name="Cancel"
                    color="text-darkBlue"
                    bg="bg-crystalBlue hover:bg-pastelBlue"
                    paddingX="px-6"
                    paddingY="py-2.5"
                    rounded="rounded-lg"
                    type="button"
                    onClick={handleCancel}
                  />

                  <CustomButton
                    name="Save Skill"
                    color="text-white"
                    bg="bg-brightBlue hover:bg-oceanBlue"
                    paddingX="px-6"
                    paddingY="py-2.5"
                    rounded="rounded-lg"
                    type="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default SkillsForm;
