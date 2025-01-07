import { useState } from "react";

import BlogCard from "./BlogCard";
import BlogListPagination from "./BlogListPagination";
import HomeCarousel from "../home/Carousel/HomeCarousel";

function BlogList({ dataList, handleDelete }) {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = dataList.slice(startIndex, endIndex);

  const totalPages = Math.ceil(dataList.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="md:p-[40px]">
        <h1 className="md:text-left   md:text-[64px] text-[44px] text-center     font-bold text-[#000] font-poppins  mb-[10rem] mt-[10rem]">
          Suggested For You
        </h1>

        <div className="w-full mb-[10rem]">
          <div className="grid grid-cols-1 gap-[8rem] justify-items-center w-full mt-8">
            {currentItems.map((item) => (
              <BlogCard
                data={item}
                key={item.id}
                handleDelete={handleDelete}
                handlePrevPage={handlePrevPage}
                handlePageChange={handlePageChange}
              />
            ))}
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
      <div>
        <h3 className="md:text-left   md:text-[64px] text-[44px] text-center     font-bold text-[#000] font-poppins  mb-[5rem] mt-[10rem]">
          Suggested For You
        </h3>

        <HomeCarousel />
      </div>
    </>
  );
}

export default BlogList;
