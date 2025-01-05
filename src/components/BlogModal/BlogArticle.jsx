import { useState } from "react";
import { toast } from "react-toastify";

import BlogForm from "./BlogForm";
import BlogList from "./BlogList";
import useAddBlog from "../../hooks/useBlog/useAddBlog";
import { useGetBlog } from "../../hooks/useBlog/useGetBlog";
import { uploadImageToSupabase } from "../../service/uploadImageSupa";
import Modal from "../Modal";
import ArticleButton from "./ArticleButton";
import { useDeleteBlog } from "../../hooks/useBlog/useDeleteBlog";

function BlogArticle() {
  const [showModal, setShowModal] = useState(false);
  const { data, isError, isLoading, error } = useGetBlog();
  const { AddBlogInfo, isPending } = useAddBlog();
  const {mutate:deleteBlogs} = useDeleteBlog()

  console.log(data);
  
  const [imageFile, setImageFile] = useState(null);
  const [errors, setErrors] = useState({ title: "", slug: "", time: "", image: "", content: "" });

  const handleDelete = (id) => {
    deleteBlogs(id)
  }

  const handleArticleClick = () => {
    setShowModal((prev) => !prev);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const slug = formData.get("slug");
    const timeValue = formData.get("time");
    const content = formData.get("content");

    setErrors({ title: "", slug: "", time: "", image: "", content: "" });

    const newErrors = {};
    if (!title) newErrors.title = "Title is required.";
    if (!slug) newErrors.slug = "Slug is required.";
    if (!content) newErrors.content = "Content is required.";
    if (!timeValue) {
      newErrors.time = "Time is required.";
    } else if (isNaN(parseInt(timeValue, 10)) || parseInt(timeValue, 10) <= 0) {
      newErrors.time = "Time must be a positive number.";
    }
    if (!imageFile) {
      newErrors.image = "Image is required.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    let imageUrl;
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

    setShowModal(false);

    AddBlogInfo({ title, slug, time: parseInt(timeValue, 10), picture: imageUrl, content: content });
  };

  if (isPending) {
    return <p>Pending...</p>;
  }

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div>
      <ArticleButton handleArticleClick={handleArticleClick} />
      {showModal && (
        <Modal>
          <BlogForm
            onSubmit={handleSubmit}
            onImageChange={handleImageChange}
            handleArticleClick={handleArticleClick}
            errors={errors}
          />
        </Modal>
      )}
      <BlogList dataList={data.blog} handleDelete={handleDelete}/>
    </div>
  );
}

export default BlogArticle;
