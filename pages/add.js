import { useRef } from "react";

export default function add() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const enWord = useRef();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const frWord = useRef();

  const handleSubit = (e) => {
    e.preventDefault();
    const newWord = {
      en: enWord.current.value,
      fr: frWord.current.value,
    };

    fetch("/api/vocapi", {
      method: "POST",
      body: JSON.stringify(newWord),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    enWord.current.value = "";
    frWord.current.value = "";
  };

  return (
    <form className="max-w-sm mx-auto m-10" onSubmit={handleSubit}>
      <div className="mb-5">
        <label htmlFor="addEn">Ajouter un mot en Anglais</label>
        <input
          ref={enWord}
          type="text"
          id="addEn"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="addFr">Ajouter un mot en Français</label>
        <input
          ref={frWord}
          type="text"
          id="addFr"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>

      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
        Ajouter
      </button>
    </form>
  );
}
