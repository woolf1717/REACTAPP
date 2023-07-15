import React from "react";
import { useState, useEffect } from "react";

import PostShort from "./post";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const BlogArticlesSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState<string>("");

  const [data, setData] = useState<any>([]);
  const blogPosts = data
   
  useEffect(() => {
    async function fetchData() {
      const api = "http://localhost:3000/api/getarticles";
      const postData = {
        method: "Post",
        headers: { "Content-Type": "application/json" }
      }
      const response = await fetch(api, postData);
      const res = await response.json();
      setData(res.products.reverse());
    }
    fetchData();
  }, []);
  // const dataSorting = () => {
  //   for(let i = 0; i > data.length; i++){
      
  //   }
  // }
  // dataSortig()
  const postsCount = data.length;
  const pagesCount = Math.ceil(postsCount / 4);
  const firstVisible = currentPage * 4 - 4;
  const forthVisible = currentPage * 4 - 1;
  let visiblePosts = blogPosts.slice(firstVisible, forthVisible + 1);
  const pageLeft = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
    visiblePosts = blogPosts.slice(firstVisible, forthVisible + 1);
  };
  const pageRight = () => {
    if (currentPage < pagesCount) setCurrentPage(currentPage + 1);
    visiblePosts = blogPosts.slice(firstVisible, forthVisible + 1);
  };
  const setPage = () => {
    setCurrentPage(Number(inputValue));
  };
  return (
    <>
    
      <div className="posts-container">
        {/* elo {JSON.stringify(data)} */}
        {visiblePosts.map((post, index) => (
          <PostShort key={index} index={index} post={post} />
        ))}{" "}
      </div>
      <nav className="auto mt-3 flex w-full items-center justify-center text-center">
        <div>
          <FontAwesomeIcon icon={faCaretLeft} onClick={pageLeft} />

          <div className="mx-px box-content inline-block h-6 w-6 rounded-md border-2 border-black bg-neutral-50">
            {currentPage}
          </div>
          <div className="mx-px inline-block h-6 w-6 rounded-md bg-neutral-50">
            of
          </div>
          <div className="mx-px inline-block h-6 w-6 rounded-md bg-neutral-50">
            {pagesCount}
          </div>
          <FontAwesomeIcon icon={faCaretRight} onClick={pageRight} />

          <form>
            {" "}
            <div className="inline-block">
              Go to page{" "}
              <input
                type="text"
                className="w-6"
                onChange={(e) => {
                  e.preventDefault, setInputValue(e.target.value);
                }}
              />
            </div>{" "}
            <div onClick={setPage}>OK</div>
          </form>
        </div>
      </nav>
    </>
  );
};

export default BlogArticlesSection;
