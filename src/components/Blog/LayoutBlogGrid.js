'use client'

import React, { useState, useEffect } from "react";
import { blogData as getBlogData } from "@/data/blog/data"; // assuming this is a function that fetches data
import BlogItem from "@/components/Blog/BlogItem";
import HandlePagination from "../Other/HandlePagination";

const LayoutBlogGrid = ({ layout, type, pageLimit }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getBlogData(); // fetch dynamic blog data
      setBlogs(data);
    }
    fetchData();
  }, []);

  const offset = currentPage * pageLimit;
  const pageCount = Math.ceil((blogs.length - 1) / pageLimit);

  let currentBlogs = blogs.slice(offset + 1, offset + pageLimit);
  if (currentPage > -1 ) {
    currentBlogs = blogs.slice(offset, offset + pageLimit);
  }

  const handlePageChange = (selected) => {
    setCurrentPage(selected);
  };

  return (
    <div className={`blog-layout ${layout} lg:py-20 sm:py-14 py-10 border-b border-outline`}>
      <div className="container">
        <div className="list-blog">
          <div className="list grid xl:grid-cols-3 md:grid-cols-2 gap-8">
            {currentBlogs.map((item) => (
              <BlogItem key={item.id} data={item} type={type} />
            ))}
          </div>
          {pageCount > 1 && (
            <div className="list-pagination flex items-center lg:mt-10 mt-7">
              <HandlePagination pageCount={pageCount} onPageChange={handlePageChange} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LayoutBlogGrid;
