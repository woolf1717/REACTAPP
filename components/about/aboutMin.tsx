import "../../src/app/globals.css";
import Image from "next/image";

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
            <p className="m-2 text-right text-sm">
              Programowaniem zainteresowałem się z w ponieważ wielu z moich
              dobrych znajomych to ...
              {/*programiści i zwyczajnie dobrze się z nimi dogaduje. */}
              {/* Duży wpływ na moją decyzje miała róznież możliwość
              osiągnięcia dużych zarobków. Na szczęście programownie okazało się
              pasjonujące, więc nie żałuję decyzji podjęciu nauki. */}{" "}
            </p>
          </div>{" "}
          <div className="pt-px text-end text-xs">Czytam dalej...</div>
        </div>
      </div>
    </>
  );
}
