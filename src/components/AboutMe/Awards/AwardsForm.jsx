import CustomButton from "../../../ui/CustomButton";

function AwardsForm({ handleAddAwards }) {
  return (
    <div>
      <form onSubmit={handleAddAwards} action="">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Award Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Award name"
            className="w-full px-4 py-3 border-2 border-pastelBlue rounded-lg focus:ring-2 focus:ring-brightBlue focus:border-brightBlue transition duration-200 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Date
          </label>
          <input
            type="date"
            name="date"
            placeholder="Date"
            rows="4"
            className="w-full px-4 py-3 border-2 border-pastelBlue rounded-lg focus:ring-2 focus:ring-brightBlue focus:border-brightBlue transition duration-200 outline-none resize-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Awarded By
          </label>
          <textarea
            name="awarded"
            placeholder="Awarded By"
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
            // onClick={handleAddCancel}
          />

          <CustomButton
            name="Add Award"
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
  );
}

export default AwardsForm;
