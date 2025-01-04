import useAddBlog from "../../hooks/useBlog/useAddBlog";
import { useGetBlog } from "../../hooks/useBlog/useGetBlog";

function BlogModal() {
  const { data, isError, isLoading, error } = useGetBlog();
  const { AddBlogInfo, isPending } = useAddBlog();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;
  console.log(data);

  function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let title = formData.get("title");
    let slug = formData.get("slug");
    let time = parseInt(formData.get("time"), 10);

    if (isNaN(time)) {
      alert("Please enter a valid number for time.");
      return;
    }

    AddBlogInfo({ title: title, slug: slug, time: time });
  }

  if (isPending) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" className="border border-gray-400" />
        <input type="text" name="slug" className="border border-gray-400" />
        <input type="number" name="time" className="border border-gray-400" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BlogModal;
