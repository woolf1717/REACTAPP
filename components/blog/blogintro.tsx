import "../../src/app/globals.css";

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
            W tej zakładce zamierzam umieszczać artykuły na temat szeroko
            pojętej branży IT. Można tu znaleźć informacje przedewszystkim na
            tematy skierowane dla developerów, jak i osób chcących rozwijać się
            w IT. Zapraszam do zapoznania się z materiałami oraz do dyskusji.
          </p>
          {/* <div className="pt-2 text-end text-xs">Czytam dalej...</div> */}
        </div>
        <div className="mt-2 overflow-hidden rounded-md bg-neutral-50 p-4">
          <h2 className="font-bold">Najnowsze artykuły:</h2>
        </div>
      </div>
    </>
  );
}
