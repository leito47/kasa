import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./../styles/footer.css";
import "./../styles/header.css";
import "./../styles/banner.css";
import "./../styles/cards.css";
import "./../styles/home.css";

import Card from "../components/cards/Cards";
import housings from "../../src/datas/data.json";
import Banner from "../components/banner/Banner";
function Home() {
  return (
    <div className="home">
      <Header />
      <Banner />
      <section className="content-cards">
        {housings.map((housing) => {
          return (
            <Card
              cover={housing.cover}
              title={housing.title}
              id={housing.id}
              key={housing.id}
            />
          );
        })}
      </section>
      <Footer />
    </div>
  );
}
export default Home;
