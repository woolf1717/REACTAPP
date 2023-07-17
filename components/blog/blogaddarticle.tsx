import "../../src/app/globals.css";

export default function BlogAddArticle() {
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
}
