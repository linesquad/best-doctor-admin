import CustomButton from "../../ui/CustomButton";
import Modal from "../Modal";

function ReusableAddModal({ title, fields, onSubmit, onCancel, showAddModal, errors }) {
  return (
    <div>
      {showAddModal && (
        <Modal>
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-[90%] max-w-md">
              <h2 className="text-2xl font-bold text-darkBlue text-center mb-8">{title}</h2>
              <form onSubmit={onSubmit} className="space-y-6">
                {fields.map((field, index) => (
                  <div key={index}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        placeholder={field.placeholder}
                        rows="4"
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-brightBlue focus:border-brightBlue transition duration-200 outline-none resize-none ${
                          errors[field.name] ? "border-red-500" : "border-pastelBlue"
                        }`}
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-brightBlue focus:border-brightBlue transition duration-200 outline-none ${
                          errors[field.name] ? "border-red-500" : "border-pastelBlue"
                        }`}
                      />
                    )}
                    {errors[field.name] && (
                      <p className="text-red-500 text-sm mt-2">{errors[field.name]}</p>
                    )}
                  </div>
                ))}
                <div className="flex justify-end gap-4 pt-4">
                  <CustomButton
                    name="Cancel"
                    color="text-darkBlue"
                    bg="bg-crystalBlue hover:bg-pastelBlue"
                    paddingX="px-6"
                    paddingY="py-2.5"
                    rounded="rounded-lg"
                    type="button"
                    onClick={onCancel}
                  />
                  <CustomButton
                    name="Submit"
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

export default ReusableAddModal;
