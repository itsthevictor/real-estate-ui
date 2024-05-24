import "./filter.scss";
const Filter = () => {
  return (
    <div className="filter">
      <h1>
        search results for <b>London</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">location</label>
          <input type="text" id="city" placeholder="location" />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="any">any</option>
            <option value="buy">buy</option>
            <option value="rent">rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">property</label>
          <select name="property" id="property">
            <option value="any">any</option>
            <option value="apartment">apartment</option>
            <option value="house">house</option>
            <option value="condo">condo</option>
            <option value="land">land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">min price</label>
          <input
            type="number"
            id="minPrice"
            min={0}
            max={1000000}
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="minPrice">max price</label>
          <input
            type="number"
            id="maxPrice"
            min={0}
            max={1000000}
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="bedrooms">bedrooms</label>
          <select name="bedrooms" id="bedrooms">
            <option value="any">any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3+">3+</option>
          </select>
        </div>
        <button>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
};
export default Filter;
