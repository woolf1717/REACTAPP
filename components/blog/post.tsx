import React from "react";

import Image from "next/image";

const Post = ({ post: { title, body, imgUrl, author }, index }: any) => {
  return (
    <div className="mt-2 overflow-hidden rounded-md bg-neutral-50 p-2">
      <h1 className="heading">{title}</h1>
      <div className="relative h-48 w-full">
        <Image className="image " src={imgUrl} alt="post" fill={true} />
      </div>
      <p>{body}</p>
      <div className="info">
        <h4>
          Written by: {author} {index}
        </h4>
        <div className="pt-px text-end text-xs">Read more...</div>
      </div>
    </div>
  );
};

export default Post;
