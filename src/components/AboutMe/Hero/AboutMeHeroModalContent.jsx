function AboutMeHeroModalContent({
  handleModalOpen,
  handleFormData,
  handleImageChange,
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[400px] flex flex-col gap-6">
        <h1 className="font-poppinsSemiBold text-black text-[21px]">
          Upload Blog Cover
        </h1>
        <form onSubmit={handleFormData}>
          <input type="file" name="file" onChange={handleImageChange} />
          <div className="flex gap-3 items-end justify-end mt-5">
            <button
              type="submit"
              className="bg-lightBlue text-white border border-white rounded-xl px-5 py-2"
            >
              Upload
            </button>

            <button
              type="button"
              className="bg-lightBlue text-white border border-white rounded-xl px-5 py-2"
              onClick={handleModalOpen}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AboutMeHeroModalContent;
