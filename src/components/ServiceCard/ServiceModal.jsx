function ServiceModal({ service, fileInputRef, closeModal, handleDelete }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg relative">
        <h2 className="text-2xl font-semibold mb-4">
          Edit Service: {service.title}
        </h2>
        <form className="flex flex-col space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Title</label>
            <input
              type="text"
              placeholder="Edit service title"
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Image</label>
            <input type="file" ref={fileInputRef} className="hidden" />
            <button
              type="button"
              onClick={() => fileInputRef.current.click()}
              className="bg-gray-200 px-4 py-2 rounded border border-gray-300"
            >
              Upload Image
            </button>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-0 w-full lg:justify-between">
            <button
              type="submit"
              className="bg-blue-500 px-4 py-2 rounded text-white"
            >
              Save Changes
            </button>
            <p
              className="bg-red-500 px-4 py-2 rounded text-white"
              onClick={() => handleDelete(service.id)}
            >
              Delete Service
            </p>
          </div>
          <button
            onClick={closeModal}
            className="absolute top-1 right-4 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </form>
      </div>
    </div>
  );
}

export default ServiceModal;
