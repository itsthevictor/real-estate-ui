import { listData } from "../data/mockData";
import "./list.scss";
import Filter from "../components/Filter";
import Card from "../components/Card";
import Map from "../components/Map";
const List = () => {
  const data = listData;
  return (
    <div className="list-page">
      <div className="list-container">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="map-container">
        <Map items={data} />
      </div>
    </div>
  );
};
export default List;
