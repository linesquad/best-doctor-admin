import { IoIosCloseCircle } from "react-icons/io";

import Modal from "./../Modal";

function ReusableAnarAddModal({
  title,
  fields,
  onSubmit,
  handleClose,
  showModal,
  errors,
  isPresent,
}) {
  if (!showModal) return null;

  return (
    <Modal>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="relative bg-white rounded-lg shadow-lg p-8 w-[90%] max-w-md flex flex-col gap-6">
          <IoIosCloseCircle
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition duration-200 w-6 h-6 cursor-pointer"
          />

          <h2 className="text-xl font-semibold text-gray-800 text-center">
            {title}
          </h2>

          <form onSubmit={onSubmit} className="flex flex-col gap-6">
            {fields.map((field, index) => (
              <div key={index} className="flex flex-col gap-2">
                <label
                  htmlFor={field.name}
                  className="text-sm font-medium text-gray-700"
                >
                  {field.label}:
                </label>

                {/* Render different input types */}
                {field.type === "checkbox" ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name={field.name}
                      checked={isPresent}
                      onChange={field.onChange}
                      className="focus:ring-2 focus:outline-none"
                    />
                    <label htmlFor={field.name}>{field.label}</label>
                  </div>
                ) : field.name === "dateTo" && isPresent ? null : ( // If 'Present' checkbox is checked, do not render 'Date To'
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className={`border rounded-lg px-3 py-2 focus:ring-2 focus:outline-none ${
                      errors[field.name]
                        ? "border-red-500 border-2"
                        : "border-gray-300"
                    }`}
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}

                {/* Display error message */}
                {errors[field.name] && (
                  <p className="text-red-500 text-sm">{errors[field.name]}</p>
                )}
              </div>
            ))}

            {/* Cancel and Submit buttons */}
            <div className="flex justify-end gap-3">
              <button
                type="button"
                className="py-2 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default ReusableAnarAddModal;
