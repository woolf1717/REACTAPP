import Image from "next/image";

import React from "react";
import { useState } from "react";

interface PostShortProps {
  post: {
    title: string;
    body: string;
    imgUrl: string;
    author: string;
  };
  index: number;
}

const PostShort = ({
  post: { title, body, imgUrl, author },
  index,
}: PostShortProps) => {
  const [postVisiblity, setPostVisiblity] = useState(false);

  const visiblePostShort = (
    <div className="mt-2 overflow-hidden rounded-md bg-neutral-50 p-2">
      <h1 className="heading">{title}</h1>
      <div className="relative h-48 w-full">
        <Image className="image " src={imgUrl} alt="post" fill={true} />
      </div>
      <p>{body.slice(0, 159)}...</p>
      <div className="info">
        <br />
        <h4>
          Written by: {author} {index}
        </h4>
        <div
          className="pt-px text-end text-xs text-sky-600"
          onClick={() => setPostVisiblity(true)}
        >
          Read more...
        </div>
      </div>
    </div>
  );
  const visiblePostLong = (
    <div className="mt-2 overflow-hidden rounded-md bg-neutral-50 p-2">
      <h1 className="heading">{title}</h1>
      <div className="relative h-48 w-full">
        <Image className="image " src={imgUrl} alt="post" fill={true} />
      </div>
      <p>{body}</p>
      <div className="info">
        <br />
        <h4>
          Written by: {author} {index}
        </h4>
        <div
          className="pt-px text-end text-xs text-sky-600"
          onClick={() => setPostVisiblity(false)}
        >
          See less...
        </div>
      </div>
    </div>
  );

  return <>{!postVisiblity ? visiblePostShort : visiblePostLong}</>;
};

export default PostShort;
