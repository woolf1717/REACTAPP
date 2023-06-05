import "../../src/app/globals.css";

import BlogPost from "./blogpost";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Posts from "./posts";

export default function BlogArticlesSection() {
  return (
    <>
      <div>
        {/* <BlogPost />
        <BlogPost />
        <BlogPost /> */}
        <Posts />
        <nav className="auto mt-3 flex w-full items-center justify-center text-center">
          <FontAwesomeIcon icon={faCaretLeft} />
          <div className="mx-px box-content inline-block h-6 w-6 rounded-md  border-2 border-black bg-neutral-50">
            1
          </div>
          <div className="mx-px inline-block h-6 w-6 rounded-md bg-neutral-50">
            2
          </div>
          <div className="mx-px inline-block h-6 w-6 rounded-md bg-neutral-50">
            3
          </div>
          <div className="mx-px inline-block h-6 w-6 rounded-md bg-neutral-50">
            ...
          </div>
          <div className="mx-px inline-block h-6 w-6 rounded-md bg-neutral-50">
            20
          </div>
          <FontAwesomeIcon icon={faCaretRight} />
        </nav>
      </div>
    </>
  );
}
