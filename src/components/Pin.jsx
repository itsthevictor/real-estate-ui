import { Popup, Marker } from "react-leaflet";
import { Link } from "react-router-dom";
import "./pin.scss";
import { formatCurrency } from "../utils/utils";
const Pin = ({ items }) => {
  return (
    <div className="pin">
      {items.map((item) => (
        <Marker key={item.id} position={[item.latitude, item.longitude]}>
          <Popup>
            <div className="popup-container">
              <img src={item.img} alt="" />
              <div className="text-container">
                <Link to={`/${item.id}`} className="img-container">
                  {item.title}
                </Link>
                <span className="bed">{item.bedrooms} bedrooms</span>

                <b className="price">{formatCurrency(item.price)}</b>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </div>
  );
};
export default Pin;
