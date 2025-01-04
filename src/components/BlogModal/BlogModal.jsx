import { useGetBlog } from "../../hooks/useBlog/useGetBlog"


function BlogModal() {
  const {data,isError,isLoading,error} = useGetBlog()

  if (isLoading) return <p>Loading...</p> ;
  if (isError) return <p>{error.message}</p>;
  console.log(data);
  

  return (
    <div>BlogModal</div>
  )
}

export default BlogModal