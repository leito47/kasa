// import Collapse from "../components/collapse/Collapse";
import housings from "../../src/datas/data.json";
import Tag from "../components/tags/Tag";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Rating from "../components/rating/Rating";
import { useParams } from "react-router-dom";
import Collapse from "../components/collapse/Collapse";
import "../styles/housing.css";
import "../styles/tag.css";

function Housing() {
  const { id } = useParams();
  const selectedHousing = housings.find((housing) => housing.id === id);

  const maxStar = 5;

  return (
    <div className="housing">
      <Header />
      <div className="localisation-tag">
        <ul className="localisation">
          {selectedHousing.tags.map((tag, index) => (
            <li key={index}>
              <Tag tags={tag} />
            </li>
          ))}
        </ul>
        <div className="star">
          <Rating rating={selectedHousing.rating} maxRating={maxStar} />
        </div>
      </div>
      <section className="section-collapse">
        <Collapse content={selectedHousing.description} title={"Description"} />
        <Collapse content={selectedHousing.equipments} title={"Equipements"} />
      </section>
      <Footer />
    </div>
  );
}

export default Housing;
