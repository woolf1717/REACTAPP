import "../src/app/globals.css";

import Menu from "../components/menu";
import Empty from "../components/empty";

export default function Home() {
  return (
    <>
      <Menu />
      <h1 className="text-2xl italic">Projekt CV.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fuga nobis
        facere laudantium voluptatem officia quidem soluta repellendus corrupti,
        expedita id exercitationem quos impedit, accusantium facilis quae!
        Voluptatem, ullam dolore.
      </p>
    </>
  );
}
