import Header from "../components/Header/index";

import Table from "../components/table";

import Footer from "../components/Footer/index";

function Home({ items }) {
  //console.log(items);
  return (
    <div className="app">
      <Header/>
      <Table items={items} />
      <Footer/>
    </div >
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
  );
  const items = await res.json();

  return {
    props: {
      items
    }
  };
}

export default Home;
