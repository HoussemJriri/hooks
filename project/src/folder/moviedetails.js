import { useState } from "react";
import { movies } from "./data";
import { Link, NavLink } from "react-router-dom";

const MovieDetails = (props) => {
  const [m, setM] = useState(movies);
  console.log(m);
  console.log(props.match.params.id);
  let mo = m.filter((el) => el.id === props.match.params.id);
  {
    console.log(mo);
  }
  return (
    <div >
      <div style={{fontFamily:"calibri",marginTop:"20px"}}>{mo[0].description}</div>

      <div>
        <iframe style={{marginTop:"30px",marginLeft:"50px"}}
          width="560"
          height="315"
          src={mo[0].trailerUrl}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div style={{marginTop:"30px"}}>
        <Link path to="/">
          <button>return</button>
        </Link>
      </div>
    </div>
  );
};
export default MovieDetails;
