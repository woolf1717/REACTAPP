import "../../src/app/globals.css";
import Image from "next/image";
import Link from "next/link";

import me from "../../src/pictures/me/me.svg";
export default function AboutMin() {
  return (
    <>
      <div>
        <div className="mt-2 overflow-hidden rounded-md bg-neutral-50 p-2">
          <h1 className="py-px pl-2 font-bold"> O MNIE</h1>
          <div className="flex flex-col items-center">
            <div className="relative m-2 block h-24 w-16 max-w-xs">
              <Image
                src={me}
                fill={true}
                alt="Picture of the author"
                className="rounded-2xl"
              />
            </div>
            <p>
              Nazywam się Bartosz Stpiczyński. Zajmuję się programowaniem od
              ponad roku i muszę przyznać, że im dłużej to robię, tym sprawia mi
              to większą przyjemność.
            </p>{" "}
            <br />
            <h2 className="font-bold">Ale od początku.</h2>
            <p>Od zawsze chciałem...</p>
          </div>{" "}
          <div className="pt-px text-end text-xs">
            <Link href={"/about"}>Czytam dalej...</Link>
          </div>
        </div>
      </div>
    </>
  );
}
