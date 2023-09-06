import React from "react";
import bannerAbout from "../../assets/img_a_propos.jpg";

function BannerAbout() {
  return (
    <div>
      <section className="banner-about">
        <img src={bannerAbout} alt="logo-banner-about" />
      </section>
    </div>
  );
}

export default BannerAbout;
