import "./Player.css";
import backArrow from "../../assets/back-arrow.svg";
import { useEffect,useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";

const API_BASE_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export default function Player() {
  const { id } = useParams();
const [apiData, setApiData] = useState({name: "",key:"", type: "", published_at: ""});
const navigate = useNavigate();
  useEffect(() => {
    fetch(`${API_BASE_URL}${id}/videos?language=en-US`, API_OPTIONS)
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, [id]);
  return (
    <div className="player">
      <img src={backArrow} alt="go back" onClick={()=>navigate(-2)} />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="Trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>Publish date : {apiData.published_at.slice(0,10)}</p>
        <p>Name: {apiData.name}</p>
        <p>Type: {apiData.type}</p>
      </div>
    </div>
  );
}
