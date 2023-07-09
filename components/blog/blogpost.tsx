import "../../src/app/globals.css";

import Image from "next/image";

import blogpostphoto from "../../src/pictures/blog/blogpostphoto.jpg";

export default function BlogPost() {
  return (
    <>
      <div>
        <div className="mt-2 overflow-hidden rounded-md bg-neutral-50 p-2">
          <h1 className="py-px pl-2 font-bold">
            {" "}
            Tu jest miejsce na tytuł postu.
          </h1>
          <div className="flex">
            <div className="h-26 relative m-2 block w-96 max-w-xs">
              <Image
                src={blogpostphoto}
                fill={true}
                alt="Picture of the author"
              />
            </div>
            <p className="m-2 text-right text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
              aliquam! Beatae. Atque Beatae. Atque ...{" "}
            </p>
          </div>{" "}
          <div className="pt-px text-end text-xs">Czytam dalej...</div>
        </div>
      </div>
    </>
  );
}
