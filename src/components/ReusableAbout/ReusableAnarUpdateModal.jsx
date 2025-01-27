import { IoIosCloseCircle } from "react-icons/io";

function ReusableAnarUpdateModal({
  title,
  fields,
  onSubmit,
  handleClose,
  showUpdateModal,
  errors,
  isPresent,
  // setIsPresent,
}) {
  if (!showUpdateModal) return null;

  return (
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
          {fields.map((field) => (
            <div key={field.name} className="flex flex-col gap-2">
              <label
                htmlFor={field.name}
                className="text-sm font-medium text-gray-700"
              >
                {field.label}:
              </label>
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
              ) : (field.name === "dateTo" || field.name === "to") &&
                isPresent ? null : (
                <input
                  type={field.type}
                  name={field.name}
                  defaultValue={field.defaultValue}
                  className={`border rounded-lg px-3 py-2 focus:ring-2 focus:outline-none ${
                    errors[field.name]
                      ? "border-red-500 border-2"
                      : "border-gray-300"
                  }`}
                />
              )}
              {errors[field.name] && (
                <p className="text-red-500 text-sm">{errors[field.name]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReusableAnarUpdateModal;
