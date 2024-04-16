export default function cours(props) {
  console.log(props);

  return (
    <div>
      <h1 className="text-center m-2">Le BTC est à : {props.result.bpi.EUR.rate} </h1>
    </div>
  );
}
export async function getServerSideProps() {
  const data = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const result = await data.json();

  return {
    props: {
      result: result,
    },
  };
}
