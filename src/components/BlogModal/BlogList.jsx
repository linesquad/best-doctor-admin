function BlogList({ dataList, handleDelete }) {
  return (
    <>
      <h1 className="text-[64px] font-bold text-[#000] font-poppins text-center mb-8">
        Suggested For You
      </h1>

      <div className="w-full">
        <div className="grid grid-cols-1 gap-8 justify-items-center w-full mt-8">
          {dataList.map((item) => (
            <div key={item.id} className="w-full rounded-[15px]">
              {/* Container for background image */}
              <div
                className="w-full h-[350px] bg-cover bg-center bg-no-repeat rounded-t-[15px]"
                style={{
                  backgroundImage: `url(${item.picture})`,
                }}
              ></div>

              {/* Text content below the image */}
              <div className="bg-white w-full p-4 rounded-b-[15px]">
                <p className="text-[15px] font-[600] text-heeboMedium leading-[135%] mb-2">
                  {item.time}
                </p>
                <p className="text-[32px] font-poppinsBold mb-2">
                  {item.title}
                </p>
                <p className="font-heeboRegular text-[12px] leading-[15px] mb-4">
                  {item.slug}
                </p>
                <p
                  className="cursor-pointer text-red-500"
                  onClick={() => handleDelete(item.id)}
                >
                  x
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogList;
