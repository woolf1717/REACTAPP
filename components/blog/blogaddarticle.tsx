import "../../src/app/globals.css";

import { useState, useRef } from "react";

export default function BlogAddArticle() {
  const [loggedIn, setLoggedIn] = useState(true);

  const articleTitleRef = useRef();
  const articleBodyRef = useRef();
  const articleImgUrlRef = useRef();
  const articleAuthorRef = useRef();

  const [added, setAdded] = useState();
  const [products, setProducts] = useState();

  async function addArticle() {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: articleTitleRef.current.value.trim(),
        body: articleBodyRef.current.value.trim(),
        imgUrl: articleImgUrlRef.current.value.trim(),
        author: articleAuthorRef.current.value.trim(),
      }),
    };
    const res = await fetch(`http://localhost:3000/api/getarticles`, postData);
  }
  if (!loggedIn) {
    return (
      <>
        <div>
          <div className="overflow-hidden rounded-md bg-neutral-50 p-4">
            <h1 className="text-center text-xl font-bold underline">
              Chcesz dodać swój wpis?
            </h1>
            <h2 className="text-center text-xs font-bold">
              Zaloguj się i sprawdź możliwości.
            </h2>
            <p className="text-sm"></p>
            {/* <div className="pt-2 text-end text-xs">Czytam dalej...</div> */}
          </div>
          <div className="mt-2 overflow-hidden rounded-md bg-neutral-50 p-4">
            <h2 className="font-bold">Najnowsze artykuły:</h2>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <div className="overflow-hidden rounded-md bg-neutral-50 p-4">
            <h1 className="text-center text-xl font-bold underline">
              Chcesz dodać swój wpis?
            </h1>
            <div className="flex flex-col pt-2  text-xs font-bold">
              <label htmlFor="">Title: </label>
              <input
                type="text"
                className="bg-custom-color"
                ref={articleTitleRef}
              ></input>
              <label htmlFor="" className="mt-2">
                Body:{" "}
              </label>
              <input
                type="text"
                className="bg-custom-color"
                ref={articleBodyRef}
              ></input>
              <label htmlFor="" className="mt-2">
                You can update IMG or insert URL link. ImgUrl(please make sure
                the img is 800/600 size):{" "}
              </label>
              <label className="mt-2">URL LINK:</label>
              <input
                type="text"
                className="bg-custom-color"
                ref={articleImgUrlRef}
              ></input>
              <label className="mt-2">IMG.jpg update</label>
              <br />
              <button className="mt-px border border-2">Update jpg.</button>
              <br />
              <br />
              <label htmlFor="">Author: </label>Here I will put username
              <input
                type="text"
                className="bg-custom-color"
                ref={articleAuthorRef}
              ></input>
              <button
                className="mt-2 border border-2"
                type="submit"
                onClick={(e) => {
                  e.preventDefault;
                  addArticle();
                }}
              >
                {" "}
                Dodaj artykuł
              </button>
            </div>
            <p className="text-sm"></p>
            {/* <div className="pt-2 text-end text-xs">Czytam dalej...</div> */}
          </div>
          <div className="mt-2 overflow-hidden rounded-md bg-neutral-50 p-4">
            <h2 className="font-bold">Najnowsze artykuły:</h2>
          </div>
        </div>{" "}
        <div>
          <form></form>
        </div>
      </>
    );
  }
}
// title, body, imgUrl, author;
