import { useState } from "react";
import lovesvg from "./assets/oliwia.png";
import lovesvg2 from "./assets/milosz.png";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Nie",
      "Na pewno?",
      "serio?",
      "zła odpowiedź!",
      "Ostatnia szansa!",
      "Może jednak tak?",
      "Będziesz żałować!",
      "Żelezik!",
      "Jesteś pewna?",
      "Fatalna pomyłka Boruca!",
      "miej serce!",
      "Zimna jak zawsze!",
      "a może jednak?",
      "dlaczego?",
      "Nie bądź wredna!",
      "Nie rób tego!",
      "Ostatecznie?",
      "złamałaś mi serce :(",
      "Plsss? :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://fcbk.su/_data/stickers/kingdom_of_tigers/kingdom_of_tigers_10.png" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            No i super, widzimy się w piątek!!!
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-80 w-50"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-80 w-50"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Oliwia zostaniesz moją walentynką?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Tak
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "Nie" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href=""
      target="__blank"
    >
      Made with{" "} by Miłosz
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </a>
  );
};
