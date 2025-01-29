import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import BlogCard from "./BlogCard";
import BlogListPagination from "./BlogListPagination";
import { useGetBlog } from "../../hooks/useBlog/useGetBlog";
import HomeCarousel from "../home/Carousel/HomeCarousel";

function BlogList({ handleDelete }) {
  const itemsPerPage = 5;
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const currentPage = parseInt(searchParams.get("page")) || 1;

  const {
    data: { data: doctor_blog = [], count = 0 } = {},
    error,
    isLoading,
  } = useGetBlog(currentPage, itemsPerPage);

  const totalPages = count ? Math.ceil(count / itemsPerPage) : 1;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setSearchParams({ page: currentPage + 1 });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setSearchParams({ page: currentPage - 1 });
    }
  };

  const handlePageChange = (page) => {
    setSearchParams({ page });
  };

  const navigateHandler = (id) => {
    navigate(`/blog/${id}`);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="md:p-[40px]">
        <h1 className="md:text-left md:text-[64px] text-[44px] text-center font-bold text-[#000] font-poppins mb-[3rem] mt-[1rem]">
          Suggested For You
        </h1>

        <div className="w-full mb-[10rem]">
          <div className="grid grid-cols-1 gap-[8rem] justify-items-center w-full mt-8">
            {doctor_blog.length > 0 ? (
              doctor_blog.map((item) => (
                <BlogCard
                  data={item}
                  key={item.id}
                  handleDelete={handleDelete}
                  onClick={() => navigateHandler(item.id)}
                />
              ))
            ) : (
              <div>No blogs available for this page.</div>
            )}
          </div>
        </div>
      </div>

      <BlogListPagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        handlePageChange={handlePageChange}
      />

      <div className="md:p-[40px]">
        <h3 className="md:text-left md:text-[64px] text-[44px] text-center font-bold text-[#000] font-poppins mb-[5rem] mt-[10rem]">
          Suggested For You
        </h3>

        <HomeCarousel />
      </div>
    </>
  );
}

export default BlogList;
