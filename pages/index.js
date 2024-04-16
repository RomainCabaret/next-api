import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home(props) {
  const [dataState, setDataState] = useState(false);

  useEffect(() => {
    newWord();
  }, []);

  const newWord = () => {
    fetch("/api/vocapi")
      .then((response) => response.json())
      .then((data) => setDataState(data));
  };

  let randomWord;
  if (dataState) {
    const array = dataState.englishList[0].data;
    randomWord = array[Math.floor(Math.random() * array.length)].en;
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Titre</title>
      </Head>
      <div className={styles.main}>
        <h1 className="text-3xl font-bold underline m-10">Mot au hasard</h1>
        {/* <table className={styles.tableau}>
          <tbody>
            {props.array.map((el, index) => (
              <tr key={index}>
                <td>{el.en}</td>
                <td>{el.fr}</td>
              </tr>
            ))}
          </tbody>
        </table> */}

        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={newWord}
        >
          GET random WORDS
        </button>
        <h2>{randomWord}</h2>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await import(`/data/vocabulary.json`);
  const array = data.vocabulary;

  // if (array.length === 0 ) {
  //   return {
  //     redirect: {
  //       destination: "/isr",
  //     },
  //   };
  // }
  if (array.length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      array,
    },
  };
}
