import { useState } from "react";
import { toast } from "react-toastify";

import BlogForm from "./BlogForm";
import BlogList from "./BlogList";
import useAddBlog from "../../hooks/useBlog/useAddBlog";
import { useGetBlog } from "../../hooks/useBlog/useGetBlog";
import { uploadImageToSupabase } from "../../service/uploadImageSupa";
import Modal from "../Modal";

function BlogArticle() {
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

    AddBlogInfo({ title, slug, time, picture: imageUrl });
  };

  if (isPending) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Modal><BlogForm onSubmit={handleSubmit} onImageChange={handleImageChange}/></Modal>
      <BlogList dataList={data.blog}/>
    </div>
  );
}

export default BlogArticle;
