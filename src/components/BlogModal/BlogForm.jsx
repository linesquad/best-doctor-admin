function BlogForm({ onSubmit, onImageChange }) {

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      <form
        onSubmit={onSubmit}
        className="bg-white rounded-lg shadow-lg p-8 w-[90%] max-w-md flex flex-col gap-6"
      >
        <h2 className="text-xl font-semibold text-gray-800 text-center">Create a Blog Post</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-sm font-medium text-gray-700">
            Title:
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="slug" className="text-sm font-medium text-gray-700">
            Slug:
          </label>
          <input
            type="text"
            name="slug"
            placeholder="Enter slug"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="time" className="text-sm font-medium text-gray-700">
            Time (in minutes):
          </label>
          <input
            type="number"
            name="time"
            placeholder="Enter time"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="image" className="text-sm font-medium text-gray-700">
            Upload Image:
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={onImageChange}
            className="text-gray-500"
          />
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 px-4 py-2 rounded-lg text-white font-medium transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default BlogForm;
