import Link from "next/link";

export default function listes(props) {
  console.log(props.array);
  console.log(Object.keys(props.array[0]));

  return (
    <div className="flex flex-col align-center justify-center w-100 m-10">
      {props.array.map((el, index) => {
        return (
          <Link
            href={`/listes/${el.name}`}
            className="text-center bg-slate-500"
            key={index}
          >
            {el.name}
          </Link>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const data = await import("@/data/listes.json");
  const array = data.englishList;

  return {
    props: {
      array,
    },
  };
}
