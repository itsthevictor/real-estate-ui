import SearchBar from "../components/SearchBar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="text-container">
        <div className="wrapper">
          {" "}
          <h1 className="title">find real estate & get your dream place</h1>
          <p className="description">
            Fit hammock portland umami tacos tousled. Bruh gatekeep health goth
            chambray quinoa. Intelligentsia offal cardigan jianbing. Plaid
            poutine actually keytar. Drinking vinegar kombucha actually,
            gorpcore health goth church-key Brooklyn.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>years of experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>awards gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>properties ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};
export default Home;
