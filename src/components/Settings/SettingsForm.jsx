

function SettingsForm({handleSubmit,settingData}) {
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="text" className="text-sm font-medium text-gray-600">
            Footer Text
          </label>
          <textarea
            rows={4}
            type="text"
            name="text"
            id="text"
            defaultValue={settingData.text}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter footer text"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={settingData.email}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-medium text-gray-600">
            Phone
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            defaultValue={settingData.phone}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter phone number"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="address"
            className="text-sm font-medium text-gray-600"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            defaultValue={settingData.address}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter address"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="linkedin"
            className="text-sm font-medium text-gray-600"
          >
            LinkedIn
          </label>
          <input
            type="text"
            name="linkedin"
            id="linkedin"
            defaultValue={settingData.linkedin}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter LinkedIn URL"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default SettingsForm