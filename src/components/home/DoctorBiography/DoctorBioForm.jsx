function DoctorBioForm({ onSubmit, onCancel, initialData = {}, isPending }) {
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          required
          defaultValue={initialData.fullname || ""}
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
        />
        <input
          type="text"
          name="status"
          placeholder="Status"
          required
          defaultValue={initialData.status || ""}
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          required
          defaultValue={initialData.degree || ""}
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
        />
      </div>
      <div className="mt-6 flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-[#007BFF] text-white rounded-lg hover:bg-[#0056b3] transition"
        >
          {isPending ? <div className="main-loader"></div> : "Submit"}
        </button>
      </div>
    </form>
  );
}

export default DoctorBioForm;
