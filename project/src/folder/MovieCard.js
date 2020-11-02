import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import StarRatingComponent from "react-star-rating-component";
import { v4 as uuidv4 } from 'uuid';
import {Link , NavLink} from 'react-router-dom';
import {movies} from'./data';



const MovieCard = (props) => {
  return (
    <Link to={`/${props.information.id}`}>
    
      <Card style={{ boxShadow: "6px 6px 6px grey" }}>
        <Card.Img
          style={{ objectFit: "cover" }}
          variant="top"
          src={props.information.postUrl}
          alt="Movie Poster"
        />
        <Card.Body>
          <Card.Title>{props.information.title}</Card.Title>
          <Card.Text>{props.information.description}</Card.Text>
          <StarRatingComponent
            name={props.information.title + "Rate"}
            value={props.information.rating}
            editing={false}
          />
        </Card.Body>
      </Card>
      </Link>
      
    
  )};

export default MovieCard;
