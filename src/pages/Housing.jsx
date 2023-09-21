import housings from "../../src/datas/data.json";
import Tag from "../components/tags/Tag";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Rating from "../components/rating/Rating";
import { useParams, Navigate } from "react-router-dom";
import Collapse from "../components/collapse/Collapse";
import "../styles/housing.css";
import "../styles/tag.css";
import "../styles/carrousel.css";
import Carrousel from "../components/carrousel/Carrousel";

function Housing() {
  const { id } = useParams();
  const selectedHousing = housings.find((housing) => housing.id === id);

  const maxStar = 5;
  if (!selectedHousing) {
    return <Navigate to="/Error" />;
  }
  return (
    <>
      <Header />
      <section className="housing">
        <div className="picture-carrousel">
          <Carrousel pictures={selectedHousing.pictures} />
        </div>

        <div className="localisation-tag">
          <div className="localisation">
            <h2>{selectedHousing.title}</h2>
            <p>{selectedHousing.location}</p>

            <div className="tags">
              {selectedHousing.tags.map((tag, index) => (
                <Tag tags={tag} key={index} />
              ))}
            </div>
          </div>
          <div className="host-star">
            <div className="host">
              <h3>{selectedHousing.host.name}</h3>
              <img
                src={selectedHousing.host.picture}
                alt={selectedHousing.host.name}
              />
            </div>
            <div className="star">
              <Rating rating={selectedHousing.rating} maxRating={maxStar} />
            </div>
          </div>
        </div>
        <section className="section-collapse-housing">
          <Collapse
            content={selectedHousing.description}
            title={"Description"}
            // divStyle={{ width: "45%" }}
          />
          <Collapse
            title="Équipements"
            content={selectedHousing.equipments.map((equipement, index) => {
              return <p key={index}>{equipement}</p>;
            })}
            // divStyle={{ width: "45%" }}
          />
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Housing;
