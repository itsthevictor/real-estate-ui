import "./slider.scss";
import { BsXLg } from "react-icons/bs";
import { useEffect, useState } from "react";

const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);

  const increaseIndex = () => {
    if (imageIndex < images.length - 1) {
      setImageIndex(imageIndex + 1);
    } else setImageIndex(0);
  };

  const decreaseIndex = () => {
    if (imageIndex !== 0) {
      setImageIndex(imageIndex - 1);
    } else setImageIndex(images.length - 1);
  };

  // useEffect(() => {
  //   console.log(imageIndex);
  // }, [imageIndex]);

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="full-screen">
          <div className="arrow" onClick={decreaseIndex}>
            <img src="/arrow.png" alt="" />
          </div>
          <div className="img-container">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow" onClick={increaseIndex}>
            <img className="right" src="/arrow.png" alt="" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            <BsXLg size={35} />
          </div>
        </div>
      )}
      <div className="main">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="carousel-preview">
        {images.slice(1).map((item, index) => (
          <img
            src={item}
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};
export default Slider;
