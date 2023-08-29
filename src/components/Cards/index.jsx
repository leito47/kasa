function Card(props) {
  const data = props.data;

  return (
    <div className="cards">
      <img src={data.cover} alt="" />
      <h2>{data.title}</h2>
    </div>
  );
}
export default Card;
