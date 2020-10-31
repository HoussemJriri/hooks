import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "bootstrap/dist/css/bootstrap.min.css";
import StarRatingComponent from "react-star-rating-component";

const MovieList = (props) => {
  const styleT = { color: "red" };
  const stylep = { fontFamily: " Gill Sans" };
  const styleW = { width: "100%", height: "50%" };

  return (
    <>
      <CardDeck style={{ marginTop: "30px" }}>
        {props.list.map((el) => {
          return (
            <Card>
              <Card.Img style={styleW} variant="top" src={el.postUrl} />
              <Card.Body>
                <Card.Title style={styleT}>{el.title}</Card.Title>
                <Card.Text style={stylep}>{el.description}</Card.Text>
              </Card.Body>
              <Card.Footer></Card.Footer>
              <StarRatingComponent
                name={"1"}
                editing={false}
                value={el.rating}
              />
            </Card>
          );
        })}
        ;
      </CardDeck>
    </>
  );
};
export default MovieList;
