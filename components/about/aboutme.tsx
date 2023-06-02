import "../../src/app/globals.css";
import Image from "next/image";

import me from "../../src/pictures/me/me.svg";
export default function AboutMe() {
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
            <div className="m-2 text-center text-sm">
              <p>
                Nazywam się Bartosz Stpiczyński. Zajmuję się programowaniem od
                ponad roku i muszę przyznać, że im dłużej to robię, tym sprawia
                mi to większą przyjemność.
              </p>{" "}
              <br />
              <h2 className="font-bold">Ale od początku.</h2>
              <p>
                Od zawsze chciałem prowadzić własną działalność i wnosić wartość
                w życie innych ludzi. W związku z powyższym, zacząłem studia na
                uczelni SWPS, na wydziale prawa. Chciałem poznać aspekty prawne
                prowadzenia działalności i spotkać ludzi, którzy podobnie jak
                ja, dążą w życiu do osiągania sukcesów . Naturalnym dla mnie
                wyborem był kierunek Prawo w biznesie. Studia jak najbardziej
                spełniły moje oczekiwania, przynajmniej jeśli chodzi o materiał
                przerabiany na zajęciach. Nie udało mi się jeszcze nawiązać
                stosunków biznesowych z ludźmi z uczelni, jednak mam nadzieję,
                że to jedynie kwestia czasu. W trakcie studiów doszedłem do
                wniosku, że obecnie wykonywany przeze mnie zawód, nie jest w
                stanie zapewnić mi klarownej ścieżki rozwoju.
              </p>
              <br />
              <h2 className="font-bold">
                I wtedy pojawiło się pytanie: co zrobić ze swoim życiem?
              </h2>{" "}
              <p>
                {" "}
                W tym czasie zainteresowałem się programowaniem. W związku z
                tym, że wielu z moich dobrych znajomych to programiści i
                zwyczajnie dobrze się z nimi dogaduje, uznałem że jeżeli będę
                miał z kimś współpracować to chciałbym, żeby byli to ludzie tego
                pokroju. Duży wpływ na moją decyzje o podjęciu tej ścieżki
                kariery, miała również możliwość osiągnięcia dużych zarobków. Na
                szczęście programownie okazało się pasjonujące i bynajmniej, nie
                żałuję decyzji o wprowadzniu tego tematu do mojego życia.
                Programowanie to idealne narzędzie do zrealizowania celów, które
                chciałbym osiągnąć. Pozwala na tworzenie produktów, które mogą
                wygenerować naprawde dużą wartość dla społeczeństwa, stosunkowo
                niskim nakładem finansowym.
              </p>{" "}
              <br />
              <h2 className="font-bold">Ale co dalej?</h2>
              <p>
                {" "}
                Chciałbym znaleść miejsce w którym będę mógł realizować swoją
                pasję, w towarzystwie ludzi o podobnych aspiracjach. Mam
                nadzieje że poznam osoby, które będa mi imponować i codzienna
                współpraca, będzie dla mnie w pozytywnym tego słowa znaczeniu
                wyzwaniem.{" "}
              </p>{" "}
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
