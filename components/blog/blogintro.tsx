import "../../src/app/globals.css";
import Image from "next/image";

import blogpostphoto from "../../src/pictures/blog/blogpostphoto.jpg";
export default function BlogIntro() {
  return (
    <>
      <div>
        <div className="overflow-hidden rounded-md bg-neutral-50 p-4">
          <h1 className="text-2xl font-bold underline">Blog</h1>
          <h2 className="text-lg font-bold">
            Strefa ta jest poświęcona blogowaniu.
          </h2>
          <p className="text-sm">
            Można tu znaleźć wiele ciekawych artyków związanych z programowaniem
            i szeroko pojętą branżą IT. Można tu znaleźć informację na
            przedewszystkim na tematy skierowane dla developerów, jak i osób
            chcących rozwijać się w IT.
          </p>
          <div className="pt-2 text-end text-xs">Czytam dalej...</div>
        </div>
        <div className="mt-2 overflow-hidden rounded-md bg-neutral-50 p-4">
          <h2 className="font-bold">Najnowsze artykuły:</h2>
        </div>
      </div>
    </>
  );
}
