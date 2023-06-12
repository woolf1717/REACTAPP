import React from "react";

import PostShort from "./post";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
// import { current } from "@reduxjs/toolkit";

const BlogArticlesSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState();
  const blogPosts = [
    {
      title: "1. JAVASCRIPT",
      body: `JavaScript is the world most popular
        lightweight, interpreted compiled programming
        language. It is also known as scripting
        language for web pages. It is well-known for
        the development of web pages, many non-browser
        environments also use it. JavaScript can be
        used for Client-side developments as well as
        Server-side developments`,
      author: "Nishant Singh ",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
    },
    {
      title: "2. Data Structure ",
      body: `There are many real-life examples of
        a stack. Consider an example of plates stacked
        over one another in the canteen. The plate
        which is at the top is the first one to be
        removed, i.e. the plate which has been placed
        at the bottommost position remains in the
        stack for the longest period of time. So, it
        can be simply seen to follow LIFO(Last In
        First Out)/FILO(First In Last Out) order.`,
      author: "Suresh Kr",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
    },
    {
      title: "3. Algorithm",
      body: `The word Algorithm means “a process
        or set of rules to be followed in calculations
        or other problem-solving operations”. Therefore
        Algorithm refers to a set of rules/instructions
        that step-by-step define how a work is to be
        executed upon in order to get the expected
        results. `,
      author: "Monu Kr",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
    },
    {
      title: "4. Computer Network",
      body: `An interconnection of multiple devices,
        also known as hosts, that are connected using
        multiple paths for the purpose of sending/
        receiving data media. Computer networks can
        also include multiple devices/mediums which
        help in the communication between two different
        devices; these are known as Network devices
        and include things such as routers, switches,
        hubs, and bridges. `,
      author: "Sonu Kr",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
    },
    {
      title: "5. JAVASCRIPT",
      body: `JavaScript is the world most popular
        lightweight, interpreted compiled programming
        language. It is also known as scripting
        language for web pages. It is well-known for
        the development of web pages, many non-browser
        environments also use it. JavaScript can be
        used for Client-side developments as well as
        Server-side developments`,
      author: "Nishant Singh ",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
    },
    {
      title: "6. Data Structure ",
      body: `There are many real-life examples of
        a stack. Consider an example of plates stacked
        over one another in the canteen. The plate
        which is at the top is the first one to be
        removed, i.e. the plate which has been placed
        at the bottommost position remains in the
        stack for the longest period of time. So, it
        can be simply seen to follow LIFO(Last In
        First Out)/FILO(First In Last Out) order.`,
      author: "Suresh Kr",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
    },
    {
      title: "7. Algorithm",
      body: `The word Algorithm means “a process
        or set of rules to be followed in calculations
        or other problem-solving operations”. Therefore
        Algorithm refers to a set of rules/instructions
        that step-by-step define how a work is to be
        executed upon in order to get the expected
        results. `,
      author: "Monu Kr",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
    },
    {
      title: "8. Computer Network",
      body: `An interconnection of multiple devices,
        also known as hosts, that are connected using
        multiple paths for the purpose of sending/
        receiving data media. Computer networks can
        also include multiple devices/mediums which
        help in the communication between two different
        devices; these are known as Network devices
        and include things such as routers, switches,
        hubs, and bridges. `,
      author: "Sonu Kr",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
    },
    {
      title: "9. JAVASCRIPT",
      body: `JavaScript is the world most popular
        lightweight, interpreted compiled programming
        language. It is also known as scripting
        language for web pages. It is well-known for
        the development of web pages, many non-browser
        environments also use it. JavaScript can be
        used for Client-side developments as well as
        Server-side developments`,
      author: "Nishant Singh ",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
    },
    {
      title: "10. Data Structure ",
      body: `There are many real-life examples of
        a stack. Consider an example of plates stacked
        over one another in the canteen. The plate
        which is at the top is the first one to be
        removed, i.e. the plate which has been placed
        at the bottommost position remains in the
        stack for the longest period of time. So, it
        can be simply seen to follow LIFO(Last In
        First Out)/FILO(First In Last Out) order.`,
      author: "Suresh Kr",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
    },
    {
      title: "11. Algorithm",
      body: `The word Algorithm means “a process
        or set of rules to be followed in calculations
        or other problem-solving operations”. Therefore
        Algorithm refers to a set of rules/instructions
        that step-by-step define how a work is to be
        executed upon in order to get the expected
        results. `,
      author: "Monu Kr",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
    },
    {
      title: "12. Computer Network",
      body: `An interconnection of multiple devices,
        also known as hosts, that are connected using
        multiple paths for the purpose of sending/
        receiving data media. Computer networks can
        also include multiple devices/mediums which
        help in the communication between two different
        devices; these are known as Network devices
        and include things such as routers, switches,
        hubs, and bridges. `,
      author: "Sonu Kr",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
    },
    {
      title: "13. Computer Network",
      body: `An interconnection of multiple devices,
        also known as hosts, that are connected using
        multiple paths for the purpose of sending/
        receiving data media. Computer networks can
        also include multiple devices/mediums which
        help in the communication between two different
        devices; these are known as Network devices
        and include things such as routers, switches,
        hubs, and bridges. `,
      author: "Sonu Kr",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
    },
    {
      title: "14. Computer Network",
      body: `An interconnection of multiple devices,
        also known as hosts, that are connected using
        multiple paths for the purpose of sending/
        receiving data media. Computer networks can
        also include multiple devices/mediums which
        help in the communication between two different
        devices; these are known as Network devices
        and include things such as routers, switches,
        hubs, and bridges. `,
      author: "Sonu Kr",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
    },
    {
      title: "15. Computer Network",
      body: `An interconnection of multiple devices,
        also known as hosts, that are connected using
        multiple paths for the purpose of sending/
        receiving data media. Computer networks can
        also include multiple devices/mediums which
        help in the communication between two different
        devices; these are known as Network devices
        and include things such as routers, switches,
        hubs, and bridges. `,
      author: "Sonu Kr",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
    },
    {
      title: "16. Computer Network",
      body: `An interconnection of multiple devices,
        also known as hosts, that are connected using
        multiple paths for the purpose of sending/
        receiving data media. Computer networks can
        also include multiple devices/mediums which
        help in the communication between two different
        devices; these are known as Network devices
        and include things such as routers, switches,
        hubs, and bridges. `,
      author: "Sonu Kr",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
    },
    {
      title: "17. Computer Network",
      body: `An interconnection of multiple devices,
        also known as hosts, that are connected using
        multiple paths for the purpose of sending/
        receiving data media. Computer networks can
        also include multiple devices/mediums which
        help in the communication between two different
        devices; these are known as Network devices
        and include things such as routers, switches,
        hubs, and bridges. `,
      author: "Sonu Kr",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
    },
  ];

  const postsCount = blogPosts.length;
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
    setCurrentPage(inputValue);
  };
  return (
    <>
      <div className="posts-container">
        {visiblePosts.map((post, index) => (
          <PostShort key={index} index={index} post={post} />
        ))}{" "}
        {postsCount}
        {pagesCount}
        {currentPage}
        <br></br>
        {firstVisible},{forthVisible}
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
