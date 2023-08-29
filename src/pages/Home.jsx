import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./../styles/footer.css";
import "./../styles/header.css";
import "./../styles/banner.css";
import "./../styles/cards.css";
import "./../styles/home.css";

import Card from "../components/Cards";
import Logement from "../../src/datas/data.json";
import Banner from "../components/Banner";
function Home() {
  return (
    <div className="Home">
      <Header />
      <Banner />
      <section className="Cards">
        {Logement.map((data) => {
          return <Card key={data.id} data={data} />;
        })}
      </section>
      <Footer />
    </div>
  );
}
export default Home;
