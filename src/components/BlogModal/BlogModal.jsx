import { useState } from "react";
import { toast } from "react-toastify";

import useAddBlog from "../../hooks/useBlog/useAddBlog";
import { useGetBlog } from "../../hooks/useBlog/useGetBlog";
import { uploadImageToSupabase } from "../../service/uploadImageSupa";

function BlogModal() {
  const { data, isError, isLoading, error } = useGetBlog();
  const { AddBlogInfo, isPending } = useAddBlog();

  const [imageFile, setImageFile] = useState(null); 

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  console.log(data.blog);
  

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let title = formData.get("title");
    let slug = formData.get("slug");
    let time = parseInt(formData.get("time"), 10);

    let imageUrl = data.blog.picture; 
    if (imageFile) {
      try {
        imageUrl = await uploadImageToSupabase(imageFile); 
        if (!imageUrl) {
          toast.error("Image upload failed. Please try again.");
          return;
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Failed to upload image.");
        return;
      }
    }

    if (isNaN(time)) {
      alert("Please enter a valid number for time.");
      return;
    }

    AddBlogInfo({ title, slug, time, picture: imageUrl }); 
  };

  if (isPending) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            className="border border-gray-400"
            required
          />
        </div>
        <div>
          <label htmlFor="slug">Slug:</label>
          <input
            type="text"
            name="slug"
            className="border border-gray-400"
            required
          />
        </div>
        <div>
          <label htmlFor="time">Time (in minutes):</label>
          <input
            type="number"
            name="time"
            className="border border-gray-400"
            required
          />
        </div>
        <div>
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="border border-gray-400"
          />
        </div>
        <button type="submit">Submit</button>
      </form>


    </div>
  );
}

export default BlogModal;
