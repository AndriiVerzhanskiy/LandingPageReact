import Header from "../components/Header/index";

import Banner from "../components/Banner/index";

import Content from "../components/Content/index";

function Home({ items }) {
  //console.log(items);
  return (
    <div className="app">
      <div className="container">
        <Header />
        <div className="box">
          <Banner />
          <Content />
        </div>
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(
//     "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
//   );
//   const items = await res.json();

//   return {
//     props: {
//       items
//     }
//   };
// }

export default Home;
