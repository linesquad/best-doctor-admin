import { IoIosCloseCircle } from "react-icons/io";

function EducationForm({
  education,
  setEducation,
  onSubmit,
  handleClose,
  errors,
  isPresent,
  setIsPresent,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-8 w-[90%] max-w-md flex flex-col gap-6">
        <IoIosCloseCircle
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition duration-200 w-6 h-6 cursor-pointer"
        />

        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Add Education
        </h2>
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          {/* University */}
          <div className="flex flex-col gap-2">
            <label htmlFor="uni" className="text-sm font-medium text-gray-700">
              University:
            </label>
            <input
              type="text"
              name="uni"
              placeholder="Enter university"
              value={education.uni}
              onChange={handleChange}
              className={`border rounded-lg px-3 py-2 focus:ring-2 focus:outline-none ${
                errors.uni ? "border-red-500 border-2" : "border-gray-300"
              }`}
            />
            {errors.uni && <p className="text-red-500 text-sm">{errors.uni}</p>}
          </div>

          {/* Degree */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="degree"
              className="text-sm font-medium text-gray-700"
            >
              Degree:
            </label>
            <input
              type="text"
              name="degree"
              placeholder="Enter degree"
              value={education.degree}
              onChange={handleChange}
              className={`border rounded-lg px-3 py-2 focus:ring-2 focus:outline-none ${
                errors.degree ? "border-red-500 border-2" : "border-gray-300"
              }`}
            />
            {errors.degree && (
              <p className="text-red-500 text-sm">{errors.degree}</p>
            )}
          </div>

          {/* Date From */}
          <div className="flex flex-col gap-2">
            <label htmlFor="from" className="text-sm font-medium text-gray-700">
              Date From:
            </label>
            <input
              type="date"
              name="from"
              value={education.from}
              onChange={handleChange}
              className={`border rounded-lg px-3 py-2 focus:ring-2 focus:outline-none ${
                errors.from ? "border-red-500 border-2" : "border-gray-300"
              }`}
            />
            {errors.from && (
              <p className="text-red-500 text-sm">{errors.from}</p>
            )}
          </div>

          {/* Date To or Present */}
          <div className="flex flex-col gap-2">
            <label htmlFor="to" className="text-sm font-medium text-gray-700">
              Date To:
            </label>
            {!isPresent && (
              <input
                type="date"
                name="to"
                value={education.to}
                onChange={handleChange}
                className={`border rounded-lg px-3 py-2 focus:ring-2 focus:outline-none ${
                  errors.to ? "border-red-500 border-2" : "border-gray-300"
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
            {errors.to && !isPresent && (
              <p className="text-red-500 text-sm">{errors.to}</p>
            )}
          </div>

          <button
            type="submit"
            className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Add Education
          </button>
        </form>
      </div>
    </div>
  );
}

export default EducationForm;
