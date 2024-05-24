import Slider from "../components/Slider";
import "./listing.scss";
import { formatCurrency } from "../utils/utils";
import Map from "../components/Map";

import { singlePostData, userData } from "../data/mockData";
const Listing = () => {
  return (
    <div className="listing">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">
                  {formatCurrency(singlePostData.price)}
                </div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">general</p>
          <div className="vertical-list">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="feature-text">
                <span>utilities</span>
                <p>renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="feature-text">
                <span>pet policy</span>
                <p>pets allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="feature-text">
                <span>property fees</span>
                <p>1x rent warranty</p>
              </div>
            </div>
          </div>
          <p className="title room-sizes">room sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 bedrooms</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">nearby places</p>
          <div className="horizontal-list">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="feature-text">
                {" "}
                <span>school</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/bus.png" alt="" />
              <div className="feature-text">
                {" "}
                <span>bus stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/restaurant.png" alt="" />
              <div className="feature-text">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">location</p>
          <div className="map-container">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              <span>send message</span>
            </button>
            <button>
              <img src="/save.png" alt="" />
              <span>save listing</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Listing;
