import BlogCard from "./BlogCard";

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
            <BlogCard data={item} key={item.id} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogList;
