import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

export default function moreList(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  if (!props.ListeEnCours) {
    return <h1>Chargement...</h1>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold m-10 text-center">
        {router.query.listes}
      </h1>
      <table className={styles.tableau}>
        <tbody>
          {props.ListeEnCours.map((el, index) => (
            <tr key={index}>
              <td>{el.en}</td>
              <td>{el.fr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.listes;
  const data = await import("@/data/listes.json");

  const ListeEnCours = data.englishList.find((list) => list.name === slug);

  if (!ListeEnCours) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ListeEnCours: ListeEnCours.data,
    },
  };
}

export async function getStaticPaths() {
  const data = await import("@/data/listes.json");

  const paths = data.englishList.map((item) => ({
    params: { listes: item.name },
  }));

  return {
    // paths: [{ params: { listes: "words" } }],
    paths,
    fallback: false,
  };
}
