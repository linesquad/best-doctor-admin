function BlogList({ dataList, handleDelete }) {
  console.log(dataList);

  return (
    <div className="md:p-[40px]">
      <h1 className="md:text-left   md:text-[64px] text-[44px] text-center     font-bold text-[#000] font-poppins  mb-[10rem] mt-[10rem]">
        Suggested For You
      </h1>

      <div className="w-full mb-[10rem]">
        <div className="grid grid-cols-1 gap-[8rem] justify-items-center w-full mt-8">
          {dataList.map((item) => (
            <div
              key={item.id}
              className="w-full rounded-[15px]   shadow-custom-light"
            >
              <div
                className="w-full h-[350px] object-cover object-center bg-no-repeat rounded-t-[15px]"
                style={{
                  backgroundImage: `url(${item.picture})`,
                }}
              ></div>

              <div className="text-left bg-white w-full p-4 rounded-b-[15px] border-b border-blog-border">
                <p className="text-[#808080] text-[20px] font-heeboBold leading-[135%] mb-2">
                  {item.time}
                </p>
                <p className="text-[32px] font-poppinsBold leading-tight mb-2">
                  {item.title}
                </p>
                <p className="font-heeboRegular text-[18px] leading-relaxed mb-4 break-words whitespace-normal">
                  {item.slug}
                </p>
                <p className="font-heeboRegular text-[18px] leading-relaxed mb-4 break-words whitespace-normal">
                  {item.content}
                </p>
                <p
                  className="text-[32px] cursor-pointer text-red-500"
                  onClick={() => handleDelete(item.id)}
                >
                  x
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogList;
