import "./Home.css";
import WitcherBanner from "./../../assets/2052703.jpg";
import witcherCaption from "./../../assets/witcher-banner.png";
import Navbar from "../../components/Navbar/Navbar";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img className="banner-img" src={WitcherBanner} alt="banner" />
        <div className="hero-caption">
          <img className="caption-img" src={witcherCaption} alt="caption" />
          <p>
            Geralt of Rivia, a solitary monster hunter, struggles to find his
            place in a world where people often prove more wicked than beasts.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src="https://cdn-icons-png.flaticon.com/128/27/27223.png" />
              Play{" "}
            </button>
            <button className="btn dark-btn">
              <img src="https://cdn-icons-png.flaticon.com/128/11894/11894219.png" />
              More info{" "}
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards catagory={"popular"} title={"BlockBuster Movies"} />
        <TitleCards catagory={"top_rated"} title={"Top Rated"} />
        <TitleCards catagory={"upcoming"} title={"Upcoming"} />
        <TitleCards catagory={"now_playing"} title={"Top Picks for you"} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
