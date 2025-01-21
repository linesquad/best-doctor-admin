import { IoIosCloseCircle } from "react-icons/io";

import Modal from "../../Modal";

function ExperienceAddModal({
  handleClose,
  errors,
  isPresent,
  setIsPresent,
  handleAddSubmit,
}) {
  return (
    <Modal>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="relative bg-white rounded-lg shadow-lg p-8 w-[90%] max-w-md flex flex-col gap-6">
          <IoIosCloseCircle
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition duration-200 w-6 h-6 cursor-pointer"
          />

          <h2 className="text-xl font-semibold text-gray-800 text-center">
            Add Experience
          </h2>
          <form onSubmit={handleAddSubmit} className="flex flex-col gap-6">
            {/* Place */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="place"
                className="text-sm font-medium text-gray-700"
              >
                Place:
              </label>
              <input
                type="text"
                name="place"
                placeholder="Enter place"
                className={`border rounded-lg px-3 py-2 focus:ring-2 focus:outline-none ${
                  errors.place ? "border-red-500 border-2" : "border-gray-300"
                }`}
              />
              {errors.place && (
                <p className="text-red-500 text-sm">{errors.place}</p>
              )}
            </div>

            {/* Department */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="department"
                className="text-sm font-medium text-gray-700"
              >
                Department:
              </label>
              <input
                type="text"
                name="department"
                placeholder="Enter department"
                className={`border rounded-lg px-3 py-2 focus:ring-2 focus:outline-none ${
                  errors.department
                    ? "border-red-500 border-2"
                    : "border-gray-300"
                }`}
              />
              {errors.department && (
                <p className="text-red-500 text-sm">{errors.department}</p>
              )}
            </div>

            {/* Date From */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="dateFrom"
                className="text-sm font-medium text-gray-700"
              >
                Date From:
              </label>
              <input
                type="date"
                name="dateFrom"
                className={`border rounded-lg px-3 py-2 focus:ring-2 focus:outline-none ${
                  errors.dateFrom
                    ? "border-red-500 border-2"
                    : "border-gray-300"
                }`}
              />
              {errors.dateFrom && (
                <p className="text-red-500 text-sm">{errors.dateFrom}</p>
              )}
            </div>

            {/* Date To or Present */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="dateTo"
                className="text-sm font-medium text-gray-700"
              >
                Date To:
              </label>
              {!isPresent && (
                <input
                  type="date"
                  name="dateTo"
                  className={`border rounded-lg px-3 py-2 focus:ring-2 focus:outline-none ${
                    errors.dateTo
                      ? "border-red-500 border-2"
                      : "border-gray-300"
                  }`}
                />
              )}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="present"
                  checked={isPresent}
                  onChange={(e) => setIsPresent(e.target.checked)}
                />
                <label htmlFor="present">Present</label>
              </div>
              {errors.dateTo && !isPresent && (
                <p className="text-red-500 text-sm">{errors.dateTo}</p>
              )}
            </div>

            {/* Position */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="position"
                className="text-sm font-medium text-gray-700"
              >
                Position:
              </label>
              <input
                type="text"
                name="position"
                placeholder="Enter position"
                className={`border rounded-lg px-3 py-2 focus:ring-2 focus:outline-none ${
                  errors.position
                    ? "border-red-500 border-2"
                    : "border-gray-300"
                }`}
              />
              {errors.position && (
                <p className="text-red-500 text-sm">{errors.position}</p>
              )}
            </div>

            <button
              type="submit"
              className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Add Experience
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default ExperienceAddModal;
