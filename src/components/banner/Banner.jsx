import React from "react";
import banner from "../../assets/img_banner.jpg";

function Banner() {
  return (
    <section className="banner">
      <img src={banner} alt="logo-banner" />
      <h1>Chez vous, partout et ailleurs</h1>
    </section>
  );
}

export default Banner;
