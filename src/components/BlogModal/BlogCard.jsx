import { CiTrash } from "react-icons/ci";

function BlogCard({ data, handleDelete }) {
  return (
    <div className="relative w-full rounded-[15px] shadow-custom-light">
      <div
        className="w-full h-[350px] object-cover object-center bg-no-repeat rounded-t-[15px]"
        style={{
          backgroundImage: `url(${data.picture})`,
        }}
      ></div>

      <div className="text-left bg-white w-full p-4 rounded-b-[15px] border-b border-blog-border">
        <p className="text-[#808080] text-[20px] font-heeboBold leading-[135%] mb-2">
          Reading Time: {data.time} minutes
        </p>
        <p className="text-[32px] font-poppinsBold leading-tight mb-2">
          {data.title}
        </p>
        <p className="font-heeboRegular text-[18px] leading-relaxed mb-4 break-words whitespace-normal">
          {data.slug}
        </p>
        <p className="font-heeboRegular text-[18px] leading-relaxed mb-4 break-words whitespace-normal">
          {data.content}
        </p>
      </div>

      <div className="absolute top-2 right-4 text-[32px] cursor-pointer ">
        <CiTrash onClick={() => handleDelete(data.id)} />
      </div>
    </div>
  );
}

export default BlogCard;
