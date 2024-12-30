function ServiceInputForm({
  showInput,
  inputValue,
  setInputValue,
  handleFileChange,
  handleFileUploadClick,
  selectedFile,
  submitServiceAdd,
  handleAddClick,
  fileInputRef,
}) {
  return (
    <div className="flex justify-end pr-4">
      {showInput ? (
        <form
          onSubmit={submitServiceAdd}
          className="flex flex-col space-y-2 items-start"
        >
          <input
            type="text"
            placeholder="Enter service title"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border rounded px-2 py-1"
          />
          <div className="flex items-center">
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              ref={fileInputRef}
            />
            {fileInputRef.current && (
              <button
                type="button"
                onClick={handleFileUploadClick}
                className="bg-gray-200 px-2 py-1 rounded"
              >
                Upload Image
              </button>
            )}
            {selectedFile && <p>{selectedFile.name}</p>}
          </div>
          <button
            type="submit"
            className="bg-blue-500 px-4 py-1 rounded text-white"
          >
            Add Service
          </button>
        </form>
      ) : (
        <button
          onClick={handleAddClick}
          className="bg-blue-500 px-4 py-1 rounded text-white"
        >
          Add Service
        </button>
      )}
    </div>
  );
}

export default ServiceInputForm;
