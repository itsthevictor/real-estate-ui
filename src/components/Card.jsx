import { Link } from "react-router-dom";
import "./card.scss";
import { formatCurrency } from "../utils/utils";

const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="img-container">
        <img src={item.img} alt="" />
      </Link>
      <div className="text-container">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">{formatCurrency(item.price)}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedrooms} bedrooms</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathrooms} bathrooms</span>
            </div>
          </div>
          <div className="ctas">
            <div className="cta">
              <img src="/save.png" alt="" />
            </div>
            <div className="cta">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
