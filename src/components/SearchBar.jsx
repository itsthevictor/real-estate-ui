import { useState } from "react";
import "./searchBar.scss";
const types = ["buy", "rent"];
const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 10000,
  });

  const switchType = (val) => {
    setQuery({ ...query, type: val });
  };
  return (
    <div className="search-bar">
      <div className="type">
        {types.map((type) => (
          <button
            className={query.type === type ? "active" : ""}
            key={type}
            onClick={() => switchType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={1000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={1000000}
          placeholder="Max Price"
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
