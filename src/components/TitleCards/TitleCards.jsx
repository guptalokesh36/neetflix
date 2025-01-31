import "./TitleCards.css";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export default function TitleCards({ title, catagory }) {
  const [apiData, setApiData] = useState([]);
  const cardRef = useRef(null);
  const handleWheel = (e) => {
    e.preventDefault();
    cardRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    fetch(
      `${API_BASE_URL}/movie/${
        catagory ? catagory : "now_playing"
      }?language=en-US&page=1`,
      API_OPTIONS
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
  }, [catagory]);

  useEffect(() => {
    const currentCardRef = cardRef.current;
    currentCardRef.addEventListener("wheel", handleWheel);
    return () => {
      currentCardRef.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {apiData.map((card) => {
          return (
            <Link to={`player/${card.id}`} className="card" key={card.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt={card.original_title}
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

TitleCards.propTypes = {
  title: PropTypes.string,
  catagory: PropTypes.string,
};
