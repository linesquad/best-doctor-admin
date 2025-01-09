import { CiTrash } from "react-icons/ci";

function BlogCard({ data, handleDelete }) {
  return (
    <>
      <div className="relative w-full rounded-[15px] shadow-custom-light">
        <div
          className="w-full h-[350px] object-cover bg-no-repeat rounded-t-[15px] bg-left sm:bg-center bg-cover"
          style={{
            backgroundImage: `url(${data.picture})`,
          }}
        ></div>

        <div className="text-left bg-white w-full p-4 rounded-b-[15px] border-b border-blog-border relative">
          <div className="absolute top-[-20rem] right-4">
            <CiTrash
              onClick={() => handleDelete(data.id)}
              className="text-[40px] cursor-pointer"
              style={{ color: "red" }}
            />
          </div>

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
            {data.content.length > 180
              ? `${data.content.slice(0, 180)}...`
              : data.content}
          </p>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
