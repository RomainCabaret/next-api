export default function contact(props) {
  return (
    <>
      <div>
        <h1>{props.data.results[0].location.timezone.description}</h1>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const quote = await fetch("https://randomuser.me/api/");
  const data = await quote.json();

  return {
    props: {
      data,
    },
    revalidate: 20,
  };
}

// https://goquotes-api.herokuapp.com/api/v1/random?count=1
