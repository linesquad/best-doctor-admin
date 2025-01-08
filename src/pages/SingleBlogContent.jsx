import { useParams } from "react-router-dom";
import { useGetBlog } from "../hooks/useBlog/useGetBlog";

function SingleBlogContent() {
  const { id } = useParams();
  const { data, isError, isLoading, error } = useGetBlog(id);
  
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;
    
  const dataBlog = data.blog

  return (
    <div className="single-blog-content">
      <h1 className="text-4xl font-bold mb-4">{dataBlog.title}</h1>
      <p className="text-lg text-gray-700 mb-6">{dataBlog.content}</p>
      <img
        src={dataBlog.picture}
        alt={dataBlog.title}
        className="w-full h-auto rounded-md mb-6"
      />
      <p className="text-sm text-gray-500">Reading Time: {dataBlog.time} minutes</p>
    </div>
  );
}

export default SingleBlogContent;
