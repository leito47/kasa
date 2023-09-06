import Collapse from "../components/collapse/Collapse";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import collapseData from "../datas/collapses.json";
import "../styles/collapse.css";
import "../styles/about.css";
import "../styles/bannerAbout.css";
import BannerAbout from "../components/banner/BannerAbout";

function About() {
  return (
    <div>
      <Header />
      <BannerAbout />
      <section className="collapse-about">
        {collapseData.map((collapse) => {
          return (
            <Collapse
              key={collapse.id}
              title={collapse.title}
              content={collapse.content}
            />
          );
        })}
      </section>

      <Footer />
    </div>
  );
}
export default About;
