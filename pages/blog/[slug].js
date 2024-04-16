import { useRouter } from "next/router";
import Head from "next/head";

export default function article() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  console.log(router);

  const pushFunction = () => {
    router.push("/");
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{router.query.slug}</title>
      </Head>
      <div>
        <h1>{router.query.slug}</h1>
        <button
          onClick={pushFunction}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Push to home
        </button>
      </div>
    </>
  );
}
